import type { Store } from "@subsquid/typeorm-store";
import { randomUUID } from "crypto";
import { Deposit, Nominator, Operator, OperatorRewardEvent } from "../model";
import type { ProcessorContext } from "../processor";

export async function processOperatorSlashedEvent(
  ctx: ProcessorContext<Store>,
  block: ProcessorContext<Store>["blocks"][0],
  extrinsic: ProcessorContext<Store>["blocks"][0]["extrinsics"][0],
  event: ProcessorContext<Store>["blocks"][0]["extrinsics"][0]["events"][0]
) {
  const operatorId = Number(event.args.operatorId);
  const operator = await ctx.store.findOneByOrFail(Operator, { operatorId });

  operator.pendingTotalStake = BigInt(0);
  operator.pendingStorageFeeDeposit = BigInt(0);
  operator.currentTotalStake = BigInt(0);
  operator.currentStorageFeeDeposit = BigInt(0);
  operator.status = JSON.stringify({
    slashed: event.args.reason.__kind || "unknown",
  });
  operator.updatedAt = block.header.height;

  await ctx.store.save(operator);

  const nominators = await ctx.store.findBy(Nominator, { operator });
  for (const nominator of nominators) {
    nominator.status = JSON.stringify({
      slashed: event.args.reason.__kind || "unknown",
    });
    nominator.updatedAt = block.header.height;

    await ctx.store.save(nominator);
  }
}

export async function processOperatorRewardedEvent(
  ctx: ProcessorContext<Store>,
  block: ProcessorContext<Store>["blocks"][0],
  extrinsic: ProcessorContext<Store>["blocks"][0]["extrinsics"][0],
  event: ProcessorContext<Store>["blocks"][0]["extrinsics"][0]["events"][0]
) {
  const operatorId = Number(event.args.operatorId);
  const operator = await ctx.store.findOneByOrFail(Operator, { operatorId });

  const opRewardEvent = new OperatorRewardEvent({
    id: randomUUID(),
    operator,
    timestamp: new Date(block.header.timestamp || 0),
    blockNumber: block.header.height,
    extrinsicHash: extrinsic.hash,
    amount: BigInt(event.args.reward),
  });

  await ctx.store.insert(opRewardEvent);

  operator.currentEpochRewards =
    operator.currentEpochRewards + BigInt(event.args.reward);
  operator.operatorRewards = operator.operatorRewards
    ? [...operator.operatorRewards, opRewardEvent]
    : [opRewardEvent];
  operator.updatedAt = block.header.height;

  await ctx.store.save(operator);
}

export async function processOperatorTaxCollectedEvent(
  ctx: ProcessorContext<Store>,
  block: ProcessorContext<Store>["blocks"][0],
  extrinsic: ProcessorContext<Store>["blocks"][0]["extrinsics"][0],
  event: ProcessorContext<Store>["blocks"][0]["extrinsics"][0]["events"][0]
) {
  const operatorId = Number(event.args.operatorId);
  const operator = await ctx.store.findOneByOrFail(Operator, { operatorId });

  operator.taxCollected = operator.taxCollected + BigInt(event.args.tax);
  operator.updatedAt = block.header.height;

  await ctx.store.save(operator);
}