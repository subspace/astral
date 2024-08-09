import {
  operators as getOperators,
  parseDeposit,
  parseWithdrawal,
} from "@autonomys/auto-consensus";
import type { ApiPromise } from "@autonomys/auto-utils";
import {
  DepositStatus,
  DomainRuntime,
  NominatorStatus,
  OperatorStatus,
  WithdrawalStatus,
} from "../model";
import type { CtxBlock, CtxEvent, CtxExtrinsic } from "../processor";
import {
  createStats,
  createStatsPerDomain,
  createStatsPerOperator,
  getOrCreateAccount,
  getOrCreateDomain,
  getOrCreateNominator,
  getOrCreateOperator,
} from "../storage";
import { getBlockNumber } from "../utils";
import { Cache } from "../utils/cache";

export async function processEpochTransitionEvent(
  cache: Cache,
  api: ApiPromise,
  block: CtxBlock,
  extrinsic: CtxExtrinsic,
  event: CtxEvent
) {
  const { domainId, completedEpochIndex } = event.args;
  const domain = getOrCreateDomain(cache, block, domainId);
  const completedEpoch = Number(completedEpochIndex);
  const currentBlockNumber = getBlockNumber(block);

  const apiAt = await api.at(block.header.hash);
  const [domainRegistry, operatorsAll] = await Promise.all([
    apiAt.query.domains.domainRegistry.entries(),
    getOperators(apiAt),
  ]);

  const parsedDomains = domainRegistry.map((domain) => ({
    domainId: (domain[0].toHuman() as string[])[0],
    ...(domain[1].toJSON() as Omit<
      {
        domainId: string;
        ownerAccountId: string;
        domainConfig: {
          domainName: string;
          runtimeId: number;
          operatorAllowList: {
            operators: string[];
          };
        };
        domainRuntimeInfo: object;
      },
      "domainId"
    >),
  }));

  const deposits = await Promise.all(
    operatorsAll.map((o) => apiAt.query.domains.deposits.entries(o.operatorId))
  ).then((d) => d.flat().map((d) => parseDeposit(d)));

  const withdrawals = await Promise.all(
    operatorsAll.map((o) =>
      apiAt.query.domains.withdrawals.entries(o.operatorId)
    )
  ).then((w) => w.flat().map((w) => parseWithdrawal(w)));

  const allOperators = operatorsAll.filter(
    (o) => o.operatorDetails.currentDomainId === BigInt(domainId)
  );

  for (const pDomain of parsedDomains) {
    const accountId = pDomain.ownerAccountId;
    const _domain = getOrCreateDomain(cache, block, Number(pDomain.domainId));

    cache.accounts.set(accountId, getOrCreateAccount(cache, block, accountId));

    _domain.accountId = accountId;
    _domain.name = pDomain.domainConfig.domainName;
    _domain.runtimeId = pDomain.domainConfig.runtimeId;

    const stringifiedRuntime = JSON.stringify(pDomain.domainRuntimeInfo);
    _domain.runtime = stringifiedRuntime.includes("AutoId")
      ? DomainRuntime.AutoId
      : DomainRuntime.EVM;
    _domain.runtimeInfo = stringifiedRuntime;
    _domain.updatedAt = currentBlockNumber;

    cache.domains.set(_domain.id, _domain);
  }

  for (const operator of allOperators) {
    const op = getOrCreateOperator(cache, block, Number(operator.operatorId));

    const {
      currentEpochRewards,
      currentTotalShares,
      currentTotalStake,
      totalStorageFeeDeposit,
      status,
    } = operator.operatorDetails;

    const rawStatus = JSON.stringify(status);
    op.currentEpochRewards = currentEpochRewards;
    op.currentTotalShares = currentTotalShares;
    op.currentTotalStake = currentTotalStake;
    op.currentStorageFeeDeposit = totalStorageFeeDeposit;
    op.rawStatus = rawStatus;
    op.updatedAt = currentBlockNumber;

    cache.operators.set(op.id, op);

    try {
      const _status = JSON.parse(rawStatus) as {
        registered?: null;
        deregistered?: {
          domainEpoch: [number, number];
          unlockAtConfirmedDomainBlockNumber: number;
        };
      };

      if (
        _status.deregistered &&
        _status.deregistered.unlockAtConfirmedDomainBlockNumber <=
          domain.lastDomainBlockNumber
      ) {
        op.status = OperatorStatus.READY_TO_UNLOCK;
        cache.operators.set(op.id, op);

        Array.from(cache.nominators.values())
          .filter(
            (n) =>
              n.status === NominatorStatus.STAKING && n.operatorId === op.id
          )
          .forEach((n) => {
            n.status = NominatorStatus.READY_TO_UNLOCK;
            n.updatedAt = currentBlockNumber;
            cache.nominators.set(n.id, n);
          });

        Array.from(cache.withdrawals.values())
          .filter(
            (w) =>
              w.status === WithdrawalStatus.PENDING && w.domainId === domain.id
          )
          .forEach((w) => {
            w.status = WithdrawalStatus.READY;
            cache.withdrawals.set(w.id, w);
          });
      }
    } catch (e) {
      console.error(
        "Error parsing operator status in processEpochTransitionEvent",
        e
      );
    }
  }

  domain.currentTotalStake = allOperators.reduce(
    (acc, o) => acc + o.operatorDetails.currentTotalStake,
    BigInt(0)
  );
  domain.currentStorageFeeDeposit = allOperators.reduce(
    (acc, o) => acc + o.operatorDetails.totalStorageFeeDeposit,
    BigInt(0)
  );

  domain.completedEpoch = completedEpoch;
  domain.updatedAt = currentBlockNumber;

  cache.domains.set(domain.id, domain);

  Array.from(cache.operators.values())
    .filter(
      (o) => o.status === OperatorStatus.REGISTERED && o.domainId === domain.id
    )
    .forEach((o) => {
      o.activeEpochCount++;
      o.updatedAt = currentBlockNumber;
      cache.operators.set(o.id, o);
    });

  Array.from(cache.operators.values())
    .filter(
      (o) => o.status === OperatorStatus.PENDING && o.domainId === domain.id
    )
    .forEach((o) => {
      o.status = OperatorStatus.REGISTERED;
      o.updatedAt = currentBlockNumber;
      cache.operators.set(o.id, o);
    });

  Array.from(cache.nominators.values())
    .filter(
      (n) => n.status === NominatorStatus.PENDING && n.domainId === domain.id
    )
    .forEach((n) => {
      n.status = NominatorStatus.STAKING;
      n.updatedAt = currentBlockNumber;
      cache.nominators.set(n.id, n);
    });

  Array.from(cache.deposits.values())
    .filter(
      (d) => d.status === DepositStatus.PENDING && d.domainId === domain.id
    )
    .forEach((d) => {
      d.status = DepositStatus.DEPOSITED;
      cache.deposits.set(d.id, d);
    });

  // Stats on epoch transition
  const stats = createStats(cache, block);
  cache.stats.set(stats.id, stats);

  const statsPerDomain = createStatsPerDomain(cache, block, domain);
  cache.statsPerDomain.set(statsPerDomain.id, statsPerDomain);

  const operators = Array.from(cache.operators.values()).filter(
    (o) => o.domainId === domain.id && o.status === OperatorStatus.REGISTERED
  );

  for (const operator of operators) {
    const statsPerOperator = createStatsPerOperator(
      cache,
      block,
      domain,
      operator
    );
    cache.statsPerOperator.set(statsPerOperator.id, statsPerOperator);
  }

  const operatorsIds = allOperators.map((o) => o.operatorId.toString());

  // Process all rpc chain deposits (ala nominators)
  const allDeposits = deposits.filter((o) =>
    operatorsIds.includes(o.operatorId.toString())
  );

  for (const deposit of allDeposits) {
    const operator = getOrCreateOperator(cache, block, deposit.operatorId);
    const nominator = getOrCreateNominator(
      cache,
      block,
      extrinsic,
      deposit.operatorId,
      {
        accountId: deposit.account,
        domainId: operator.domainId,
        operatorId: operator.id,
      },
      deposit.account
    );
    nominator.knownShares = deposit.known.shares ?? BigInt(0);
    nominator.knownStorageFeeDeposit =
      deposit.known.storageFeeDeposit ?? BigInt(0);
    nominator.pendingAmount = deposit.pending?.amount ?? BigInt(0);
    nominator.pendingStorageFeeDeposit =
      deposit.pending?.storageFeeDeposit ?? BigInt(0);
    nominator.pendingEffectiveDomainEpoch =
      deposit.pending?.effectiveDomainEpoch ?? 0;
    nominator.updatedAt = currentBlockNumber;

    cache.nominators.set(nominator.id, nominator);
  }

  // Process all rpc chain withdrawals
  const allWithdrawals = withdrawals.filter((o) =>
    operatorsIds.includes(o.operatorId.toString())
  );

  for (const withdrawal of allWithdrawals) {
    const operator = getOrCreateOperator(cache, block, withdrawal.operatorId);
    const nominator = getOrCreateNominator(
      cache,
      block,
      extrinsic,
      withdrawal.operatorId,
      {
        accountId: withdrawal.account,
        domainId: operator.domainId,
        operatorId: operator.id,
      },
      withdrawal.account
    );
    nominator.totalWithdrawalAmounts =
      withdrawal.totalWithdrawalAmount ?? BigInt(0);
    nominator.totalStorageFeeRefund =
      withdrawal.withdrawals && Array.isArray(withdrawal.withdrawals)
        ? withdrawal.withdrawals.reduce(
            (acc, w) => acc + BigInt(w.storageFeeRefund),
            BigInt(0)
          )
        : BigInt(0);
    nominator.unlockAtConfirmedDomainBlockNumber =
      withdrawal.withdrawals && Array.isArray(withdrawal.withdrawals)
        ? withdrawal.withdrawals.map(
            (w) => w.unlockAtConfirmedDomainBlockNumber
          )
        : [];
    if (withdrawal.withdrawalInShares) {
      nominator.pendingShares =
        withdrawal.withdrawalInShares.shares ?? BigInt(0);
      nominator.pendingStorageFeeRefund =
        withdrawal.withdrawalInShares.storageFeeRefund ?? BigInt(0);
      nominator.unlockAtConfirmedDomainBlockNumber =
        nominator.unlockAtConfirmedDomainBlockNumber.length > 0
          ? [
              withdrawal.withdrawalInShares.domainEpoch[1],
              ...nominator.unlockAtConfirmedDomainBlockNumber,
            ]
          : [withdrawal.withdrawalInShares.domainEpoch[1]];
    }
    nominator.updatedAt = currentBlockNumber;

    cache.nominators.set(nominator.id, nominator);
  }

  cache.isModified = true;

  return cache;
}
