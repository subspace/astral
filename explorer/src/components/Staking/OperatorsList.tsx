'use client'

import { useApolloClient } from '@apollo/client'
import { sendGAEvent } from '@next/third-parties/google'
import { SortingState } from '@tanstack/react-table'
import { DebouncedInput } from 'components/common/DebouncedInput'
import { SortedTable } from 'components/common/SortedTable'
import { Spinner } from 'components/common/Spinner'
import { BIGINT_ZERO, Chains, PAGE_SIZE, SHARES_CALCULATION_MULTIPLIER } from 'constants/'
import { INTERNAL_ROUTES, Routes } from 'constants/routes'
import {
  OperatorOrderByInput,
  OperatorsConnectionQuery,
  OperatorsConnectionQueryVariables,
} from 'gql/oldSquidTypes'
import { useConsensusData } from 'hooks/useConsensusData'
import useDomains from 'hooks/useDomains'
import { useDomainsData } from 'hooks/useDomainsData'
import { useSquidQuery } from 'hooks/useSquidQuery'
import useWallet from 'hooks/useWallet'
import { useWindowFocus } from 'hooks/useWindowFocus'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useConsensusStates } from 'states/consensus'
import { useDomainsStates } from 'states/domains'
import { hasValue, isLoading, useQueryStates } from 'states/query'
import { useViewStates } from 'states/view'
import { Operators } from 'types/consensus'
import type { Cell } from 'types/table'
import { downloadFullData } from 'utils/downloadFullData'
import { bigNumberToNumber, bigNumberToString, numberWithCommas } from 'utils/number'
import { operatorStatus } from 'utils/operator'
import { sort } from 'utils/sort'
import { capitalizeFirstLetter, shortString } from 'utils/string'
import { countTablePages } from 'utils/table'
import { AccountIcon } from '../common/AccountIcon'
import { DataSource } from '../common/DataSource'
import { DataSourceBanner } from '../common/DataSourceBanner'
import { MyPositionSwitch } from '../common/MyPositionSwitch'
import { Tooltip } from '../common/Tooltip'
import { NotFound } from '../layout/NotFound'
import { ActionsDropdown, ActionsDropdownRow } from './ActionsDropdown'
import { ActionsModal, OperatorAction, OperatorActionType } from './ActionsModal'
import { QUERY_OPERATOR_CONNECTION_LIST } from './query'

export const OperatorsList: FC = () => {
  const { ref, inView } = useInView()
  const [searchOperator, setSearch] = useState<string>('')
  const [sorting, setSorting] = useState<SortingState>([{ id: 'id', desc: false }])
  const [pagination, setPagination] = useState({
    pageSize: PAGE_SIZE,
    pageIndex: 0,
  })
  const { subspaceAccount } = useWallet()
  const { operatorId } = useParams<{ operatorId?: string }>()
  const { operators: rpcOperators, nominatorCount, deposits, withdrawals } = useConsensusStates()
  const { domains } = useDomainsStates()
  const { loadData: loadDomainsData } = useDomainsData()
  const { loadData: loadConsensusData } = useConsensusData()
  const inFocus = useWindowFocus()
  const { useRpcData, myPositionOnly } = useViewStates()

  useEffect(() => {
    loadDomainsData()
    loadConsensusData()
  }, [loadConsensusData, loadDomainsData])

  const [action, setAction] = useState<OperatorAction>({
    type: OperatorActionType.None,
    operatorId: operatorId ? parseInt(operatorId) : null,
    maxShares: null,
  })
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleAction = useCallback((value: OperatorAction) => {
    setAction(value)
    if (value.type !== OperatorActionType.None) setIsOpen(true)
    sendGAEvent({
      event: 'initialize_staking_action',
      value: `action:${value.toString()}`,
    })
  }, [])
  const handleActionClose = useCallback(() => {
    setIsOpen(false)
    setAction({ type: OperatorActionType.None, operatorId: null, maxShares: null })
  }, [])

  const { selectedChain, selectedDomain } = useDomains()
  const apolloClient = useApolloClient()

  const myUnlockedWithdrawals = useMemo(
    () =>
      withdrawals.filter(
        (w) =>
          w.account === subspaceAccount &&
          w.totalWithdrawalAmount > BIGINT_ZERO &&
          w.withdrawals.length > 0,
      ),
    [withdrawals, subspaceAccount],
  )
  const myPendingWithdrawals = useMemo(
    () =>
      withdrawals.filter(
        (w) => w.account === subspaceAccount && w.withdrawalInShares.shares > BIGINT_ZERO,
      ),
    [withdrawals, subspaceAccount],
  )

  const columns = useMemo(() => {
    const cols = [
      {
        accessorKey: 'id',
        header: 'Id',
        enableSorting: !useRpcData,
        cell: ({
          row,
        }: Cell<
          OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'] | Operators
        >) => (
          <Link
            className='hover:text-purpleAccent'
            href={INTERNAL_ROUTES.operators.id.page(
              selectedChain.urls.page,
              selectedDomain,
              row.original.id,
            )}
          >
            <div>{row.original.id}</div>
          </Link>
        ),
      },
      {
        accessorKey: 'currentDomainId',
        header: 'Domain',
        enableSorting: !useRpcData,
        cell: ({
          row,
        }: Cell<
          OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'] | Operators
        >) => {
          const domain = domains.find(
            (d) =>
              (row.original.currentDomainId || row.original.currentDomainId === 0) &&
              d.domainId === row.original.currentDomainId.toString(),
          )
          return (
            <div>
              {domain
                ? domain.domainName.charAt(0).toUpperCase() + domain.domainName.slice(1)
                : '#' + row.original.currentDomainId}
            </div>
          )
        },
      },
      {
        accessorKey: 'signingKey',
        header: 'Signing Key',
        enableSorting: !useRpcData,
        cell: ({
          row,
        }: Cell<
          OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'] | Operators
        >) => (
          <div className='row flex items-center gap-3'>
            {row.original.operatorOwner === subspaceAccount && (
              <Tooltip text='You are the operator'>
                <AccountIcon address={row.original.operatorOwner} size={26} />
              </Tooltip>
            )}
            <div>{shortString(row.original.signingKey)}</div>
          </div>
        ),
      },
      {
        accessorKey: 'minimumNominatorStake',
        header: 'Min. Stake',
        enableSorting: !useRpcData,
        cell: ({
          row,
        }: Cell<
          OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'] | Operators
        >) => (
          <div>{`${bigNumberToNumber(row.original.minimumNominatorStake)} ${selectedChain.token.symbol}`}</div>
        ),
      },
      {
        accessorKey: 'nominationTax',
        header: 'Nominator Tax',
        enableSorting: !useRpcData,
        cell: ({
          row,
        }: Cell<
          OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'] | Operators
        >) => <div>{`${row.original.nominationTax}%`}</div>,
      },
      {
        accessorKey: 'currentTotalStake',
        header: 'Total Stake',
        enableSorting: !useRpcData,
        cell: ({
          row,
        }: Cell<
          OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'] | Operators
        >) => (
          <div>{`${bigNumberToNumber(row.original.currentTotalStake)} ${selectedChain.token.symbol}`}</div>
        ),
      },
      {
        accessorKey: 'deposits',
        header: 'Deposits',
        enableSorting: false,
        cell: ({
          row,
        }: Cell<
          OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'] | Operators
        >) => {
          const opDeposits = deposits.filter((d) => d.operatorId.toString() === row.original.id)
          const depositShares = opDeposits.reduce(
            (acc, deposit) => acc + deposit.shares,
            BIGINT_ZERO,
          )
          const pendingAmount = opDeposits.reduce(
            (acc, deposit) => (deposit.pending !== null ? acc + deposit.pending.amount : acc),
            BIGINT_ZERO,
          )
          const pendingStorageFee = opDeposits.reduce(
            (acc, deposit) =>
              deposit.pending !== null ? acc + deposit.pending.storageFeeDeposit : acc,
            BIGINT_ZERO,
          )
          const op = rpcOperators.find((o) => o.id === row.original.id)
          const sharesValue =
            op && BigInt(op.currentTotalShares) > BIGINT_ZERO
              ? (BigInt(op.currentTotalStake) * SHARES_CALCULATION_MULTIPLIER) /
                BigInt(op.currentTotalShares)
              : BIGINT_ZERO
          const total =
            (depositShares * sharesValue) / SHARES_CALCULATION_MULTIPLIER +
            pendingAmount +
            pendingStorageFee
          let tooltip = ''
          if (pendingAmount > BIGINT_ZERO)
            tooltip += `Pending; ${bigNumberToNumber(pendingAmount + pendingStorageFee)} ${selectedChain.token.symbol}`
          if (depositShares > BIGINT_ZERO && pendingAmount > BIGINT_ZERO) tooltip += ' - '
          if (depositShares > BIGINT_ZERO)
            tooltip += `Staked: ${bigNumberToNumber(
              (depositShares * sharesValue) / SHARES_CALCULATION_MULTIPLIER,
            )} ${selectedChain.token.symbol}`
          return total > BIGINT_ZERO ? (
            <div>
              <Tooltip text={tooltip}>
                {bigNumberToNumber(total)} {selectedChain.token.symbol}
              </Tooltip>
            </div>
          ) : (
            <div>0 {selectedChain.token.symbol}</div>
          )
        },
      },
      {
        accessorKey: 'withdrawals',
        header: 'Withdrawals',
        enableSorting: false,
        cell: ({
          row,
        }: Cell<
          OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'] | Operators
        >) => {
          const opWithdrawals = withdrawals.filter(
            (d) => d.operatorId.toString() === row.original.id,
          )
          const totalPending = opWithdrawals.reduce(
            (acc, withdrawal) =>
              acc +
              withdrawal.withdrawalInShares.shares +
              withdrawal.withdrawalInShares.storageFeeRefund,
            BIGINT_ZERO,
          )
          const totalUnlocked = opWithdrawals.reduce(
            (acc, withdrawal) =>
              withdrawal.withdrawals
                ? acc +
                  withdrawal.withdrawals.reduce(
                    (acc, w) => acc + w.amountToUnlock + w.storageFeeRefund,
                    BIGINT_ZERO,
                  )
                : BIGINT_ZERO,
            BIGINT_ZERO,
          )
          const op = rpcOperators.find((o) => o.id === row.original.id)
          const sharesValue =
            op && BigInt(op.currentTotalShares) > BIGINT_ZERO
              ? (BigInt(op.currentTotalStake) * SHARES_CALCULATION_MULTIPLIER) /
                BigInt(op.currentTotalShares)
              : BIGINT_ZERO
          const total = (totalPending * sharesValue) / SHARES_CALCULATION_MULTIPLIER + totalUnlocked
          let tooltip = ''
          if (totalPending > BIGINT_ZERO)
            tooltip += `Pending; ${bigNumberToNumber(totalPending)} ${selectedChain.token.symbol}`
          if (totalUnlocked > BIGINT_ZERO && totalPending > BIGINT_ZERO) tooltip += ' - '
          if (totalUnlocked > BIGINT_ZERO)
            tooltip += `Unlocked: ${bigNumberToNumber(totalUnlocked)} ${selectedChain.token.symbol}`
          return total > BIGINT_ZERO ? (
            <div>
              <Tooltip text={tooltip}>
                {bigNumberToNumber(total)} {selectedChain.token.symbol}
              </Tooltip>
            </div>
          ) : (
            <div>0 {selectedChain.token.symbol}</div>
          )
        },
      },
      {
        accessorKey: 'nominators',
        header: 'Nominators',
        enableSorting: false,
        cell: ({
          row,
        }: Cell<
          OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'] | Operators
        >) => {
          if (useRpcData) {
            const count = nominatorCount.find((o) => o.id.toString() === row.original.id)
            return <div>{count ? count.count : 0}</div>
          }
          return (
            <div>
              {(row.original as OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'])
                .nominators
                ? (
                    row.original as OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node']
                  ).nominators.length
                : 0}
            </div>
          )
        },
      },
      {
        accessorKey: 'status',
        header: 'Status',
        enableSorting: !useRpcData,
        cell: ({
          row,
        }: Cell<
          OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'] | Operators
        >) => (
          <div>
            {selectedChain.urls.page === Chains.gemini3g
              ? row.original.status
              : capitalizeFirstLetter(operatorStatus(row.original.status))}
          </div>
        ),
      },
    ]
    if (useRpcData && deposits.find((d) => d.account === subspaceAccount))
      cols.push({
        accessorKey: 'myStake',
        header: 'My Stake',
        enableSorting: !useRpcData,
        cell: ({
          row,
        }: Cell<
          OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'] | Operators
        >) => {
          const deposit = deposits.find(
            (d) => d.account === subspaceAccount && d.operatorId.toString() === row.original.id,
          )
          const op = rpcOperators.find((o) => o.id === row.original.id)
          const sharesValue =
            op && BigInt(op.currentTotalShares) > BIGINT_ZERO
              ? (BigInt(op.currentTotalStake) * SHARES_CALCULATION_MULTIPLIER) /
                BigInt(op.currentTotalShares)
              : BIGINT_ZERO
          const pendingAmount =
            deposit && deposit.pending
              ? deposit.pending.amount + deposit.pending.storageFeeDeposit
              : BIGINT_ZERO
          const depositShares = deposit ? deposit.shares : BIGINT_ZERO
          const total = deposit
            ? (deposit.shares * sharesValue) / SHARES_CALCULATION_MULTIPLIER + pendingAmount
            : BIGINT_ZERO
          let tooltip = ''
          if (pendingAmount > BIGINT_ZERO)
            tooltip += `Pending; ${bigNumberToNumber(pendingAmount)} ${selectedChain.token.symbol}`
          if (depositShares > BIGINT_ZERO && pendingAmount > BIGINT_ZERO) tooltip += ' - '
          if (depositShares > BIGINT_ZERO)
            tooltip += `Staked: ${bigNumberToNumber(
              (depositShares * sharesValue) / SHARES_CALCULATION_MULTIPLIER,
            )} ${selectedChain.token.symbol}`
          return (
            <div>
              <Tooltip text={tooltip}>
                {bigNumberToNumber(total)} {selectedChain.token.symbol}
              </Tooltip>
            </div>
          )
        },
      })
    if (subspaceAccount)
      cols.push({
        accessorKey: 'actions',
        header: 'Actions',
        enableSorting: false,
        cell: ({
          row,
        }: Cell<
          OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node'] | Operators
        >) => {
          const isOperator = row.original.operatorOwner === subspaceAccount
          const deposit = deposits.find(
            (d) => d.account === subspaceAccount && d.operatorId.toString() === row.original.id,
          )
          const nominator =
            (!useRpcData &&
              (
                row.original as OperatorsConnectionQuery['operatorsConnection']['edges'][0]['node']
              ).nominators.find(
                (nominator) => nominator.id === `${row.original.id}-${subspaceAccount}`,
              )) ||
            deposit
          const excludeActions = []
          if (!isOperator)
            excludeActions.push(OperatorActionType.Deregister, OperatorActionType.UnlockFunds)
          if (!nominator)
            excludeActions.push(OperatorActionType.Withdraw, OperatorActionType.UnlockNominator)
          if (
            !useRpcData &&
            !nominator &&
            row.original.status &&
            JSON.parse(row.original.status ?? '{}')?.deregistered
          )
            excludeActions.push(OperatorActionType.Nominating)
          if (
            !useRpcData &&
            row.original.status &&
            JSON.parse(row.original.status ?? '{}')?.slashed === null
          )
            return <></>
          return (
            <ActionsDropdown
              action={action}
              handleAction={handleAction}
              row={row as ActionsDropdownRow}
              excludeActions={excludeActions}
              nominatorMaxShares={nominator ? BigInt(nominator.shares) : BIGINT_ZERO}
            />
          )
        },
      })
    return cols
  }, [
    useRpcData,
    deposits,
    subspaceAccount,
    selectedChain.urls.page,
    selectedChain.token.symbol,
    selectedDomain,
    domains,
    rpcOperators,
    withdrawals,
    nominatorCount,
    action,
    handleAction,
  ])

  const orderBy = useMemo(
    () => sort(sorting, OperatorOrderByInput.IdAsc) as OperatorOrderByInput,
    [sorting],
  )

  const where = useMemo(() => {
    if (subspaceAccount && myPositionOnly && !searchOperator)
      return {
        OR: [
          // eslint-disable-next-line camelcase
          { operatorOwner_eq: subspaceAccount },
          // eslint-disable-next-line camelcase
          { nominators_some: { account: { id_eq: subspaceAccount } } },
        ],
      }
    // eslint-disable-next-line camelcase
    return searchOperator ? { id_eq: searchOperator } : {}
  }, [myPositionOnly, searchOperator, subspaceAccount])

  const variables = useMemo(
    () => ({
      first: pagination.pageSize,
      after:
        pagination.pageIndex > 0
          ? (pagination.pageIndex * pagination.pageSize).toString()
          : undefined,
      orderBy,
      where,
    }),
    [pagination.pageSize, pagination.pageIndex, orderBy, where],
  )

  const { setIsVisible } = useSquidQuery<
    OperatorsConnectionQuery,
    OperatorsConnectionQueryVariables
  >(
    QUERY_OPERATOR_CONNECTION_LIST,
    {
      variables,
      skip: !inFocus,
      pollInterval: 6000,
    },
    Routes.staking,
    'operators',
  )

  const {
    staking: { operators },
  } = useQueryStates()

  const fullDataDownloader = useCallback(
    () =>
      downloadFullData(apolloClient, QUERY_OPERATOR_CONNECTION_LIST, 'operatorsConnection', {
        first: 10,
        orderBy,
      }),
    [apolloClient, orderBy],
  )

  const handleSearch = useCallback((value: string | number) => {
    setSearch(value.toString())
    setPagination({ ...pagination, pageIndex: 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const operatorsConnection = useMemo(() => {
    if (useRpcData && subspaceAccount) {
      const myRpcNominatorIds = deposits
        .filter((d) => d.account === subspaceAccount)
        .map((n) => n.operatorId.toString())
      return rpcOperators
        .filter((o) =>
          myPositionOnly
            ? o.operatorOwner === subspaceAccount || myRpcNominatorIds.includes(o.id)
            : true,
        )
        .map((operator) => ({
          ...operator,
          nominators: [],
          totalShares: operator.currentTotalShares,
        }))
    }
    if (hasValue(operators))
      return operators.value.operatorsConnection.edges.map((operator) => operator.node)
    return []
  }, [deposits, myPositionOnly, operators, rpcOperators, subspaceAccount, useRpcData])

  const totalCount = useMemo(
    () => (hasValue(operators) ? operators.value.operatorsConnection.totalCount : 0),
    [operators],
  )
  const totalLabel = useMemo(() => numberWithCommas(Number(totalCount)), [totalCount])
  const pageCount = useMemo(
    () => countTablePages(totalCount, pagination.pageSize),
    [totalCount, pagination],
  )

  const noData = useMemo(() => {
    if (isLoading(operators)) return <Spinner isSmall />
    if (!hasValue(operators)) return <NotFound />
    return null
  }, [operators])

  const myUnlockedWithdrawalsList = useMemo(
    () =>
      myUnlockedWithdrawals.length > 0 && (
        <div className='mt-5 flex flex-col gap-2'>
          <div className='text-base font-medium text-grayDark dark:text-white'>
            My Unlocked Withdrawals ({myUnlockedWithdrawals.length})
          </div>
          <div className='flex w-full flex-col sm:mt-0'>
            <div className='my-6 rounded'>
              <SortedTable
                data={myUnlockedWithdrawals}
                columns={[
                  {
                    accessorKey: 'operatorId',
                    header: 'Operator Id',
                    enableSorting: false,
                    cell: ({ row }) => <div>{row.original.operatorId}</div>,
                  },
                  {
                    accessorKey: 'totalWithdrawalAmount',
                    header: 'Withdrawal Amount',
                    enableSorting: false,
                    cell: ({ row }) => (
                      <div>
                        {bigNumberToString(row.original.totalWithdrawalAmount.toString())}{' '}
                        {selectedChain.token.symbol}
                      </div>
                    ),
                  },
                  {
                    accessorKey: 'totalStorageFeeRefund',
                    header: 'Storage Fee Refund',
                    enableSorting: false,
                    cell: ({ row }) => {
                      const totalStorageFeeRefund =
                        row.original.withdrawals &&
                        row.original.withdrawals.reduce(
                          (acc, w) => acc + w.storageFeeRefund,
                          BIGINT_ZERO,
                        )
                      return (
                        <div>
                          {bigNumberToString(totalStorageFeeRefund.toString())}{' '}
                          {selectedChain.token.symbol}
                        </div>
                      )
                    },
                  },
                  {
                    accessorKey: 'withdrawalInShares.unlockAtConfirmedDomainBlockNumber',
                    header: 'Withdrawal at Domain Block Number',
                    enableSorting: false,
                    cell: ({ row }) => {
                      return (
                        <div>
                          {row.original.withdrawalInShares.unlockAtConfirmedDomainBlockNumber.toString()}
                        </div>
                      )
                    },
                  },
                  {
                    accessorKey: 'withdrawals',
                    header: 'Withdrawals',
                    enableSorting: false,
                    cell: ({ row }) => <div>{row.original.withdrawals.length}</div>,
                  },
                  {
                    accessorKey: 'total',
                    header: 'Total Withdrawal Amount',
                    enableSorting: false,
                    cell: ({ row }) => {
                      const totalStorageFeeRefund =
                        row.original.withdrawals &&
                        row.original.withdrawals.reduce(
                          (acc, w) => acc + w.storageFeeRefund,
                          BIGINT_ZERO,
                        )
                      const total = totalStorageFeeRefund
                        ? BigInt(row.original.totalWithdrawalAmount) + totalStorageFeeRefund
                        : BigInt(row.original.totalWithdrawalAmount)
                      return (
                        <div>
                          {bigNumberToString(total.toString())} {selectedChain.token.symbol}
                        </div>
                      )
                    },
                  },
                  {
                    accessorKey: 'actions',
                    header: 'Actions',
                    enableSorting: false,
                    cell: ({ row }) => {
                      return (
                        <ActionsDropdown
                          action={action}
                          handleAction={handleAction}
                          row={{
                            original: {
                              id: row.original.operatorId.toString(),
                              totalShares: BIGINT_ZERO,
                            },
                          }}
                          excludeActions={[
                            OperatorActionType.Nominating,
                            OperatorActionType.Withdraw,
                            OperatorActionType.Deregister,
                          ]}
                        />
                      )
                    },
                  },
                ]}
                showNavigation={false}
                sorting={sorting}
                onSortingChange={setSorting}
                pagination={pagination}
                pageCount={pageCount}
                onPaginationChange={setPagination}
                filename='operators-my-withdrawals-list'
                pageSizeOptions={[10]}
                fullDataDownloader={fullDataDownloader}
              />
            </div>
          </div>
        </div>
      ),
    [
      action,
      fullDataDownloader,
      handleAction,
      myUnlockedWithdrawals,
      pageCount,
      pagination,
      selectedChain.token.symbol,
      sorting,
    ],
  )

  const myPendingWithdrawalsList = useMemo(
    () =>
      myPendingWithdrawals.length > 0 && (
        <div className='mt-2 flex flex-col gap-2'>
          <div className='text-base font-medium text-grayDark dark:text-white'>
            My Pending Withdrawals ({myPendingWithdrawals.length})
          </div>
          <div className='flex w-full flex-col sm:mt-0'>
            <div className='my-6 rounded'>
              <SortedTable
                data={myPendingWithdrawals}
                columns={[
                  {
                    accessorKey: 'operatorId',
                    header: 'Operator Id',
                    enableSorting: false,
                    cell: ({ row }) => <div>{row.original.operatorId}</div>,
                  },
                  {
                    accessorKey: 'shares',
                    header: 'Withdrawal Amount',
                    enableSorting: false,
                    cell: ({ row }) => {
                      const op = rpcOperators.find(
                        (o) => o.id === row.original.operatorId.toString(),
                      )
                      const sharesValue =
                        op && BigInt(op.currentTotalShares) > BIGINT_ZERO
                          ? (BigInt(op.currentTotalStake) * SHARES_CALCULATION_MULTIPLIER) /
                            BigInt(op.currentTotalShares)
                          : BIGINT_ZERO
                      const withdrawAmount = bigNumberToNumber(
                        (row.original.withdrawalInShares.shares * sharesValue) /
                          SHARES_CALCULATION_MULTIPLIER,
                      )
                      return (
                        <div>
                          <Tooltip
                            text={`Shares: ${row.original.withdrawalInShares.shares.toString()} - Share value: ${sharesValue} - Total: ${withdrawAmount}`}
                          >
                            {withdrawAmount} {selectedChain.token.symbol}
                          </Tooltip>
                        </div>
                      )
                    },
                  },
                  {
                    accessorKey: 'storageFeeRefund',
                    header: 'Storage Fee Refund',
                    enableSorting: false,
                    cell: ({ row }) => {
                      const op = rpcOperators.find(
                        (o) => o.id === row.original.operatorId.toString(),
                      )
                      const sharesValue =
                        op && BigInt(op.currentTotalShares) > BIGINT_ZERO
                          ? (BigInt(op.currentTotalStake) * SHARES_CALCULATION_MULTIPLIER) /
                            BigInt(op.currentTotalShares)
                          : BIGINT_ZERO
                      const withdrawAmount = bigNumberToNumber(
                        (row.original.withdrawalInShares.storageFeeRefund * sharesValue) /
                          SHARES_CALCULATION_MULTIPLIER,
                      )
                      return (
                        <div>
                          <Tooltip
                            text={`Shares: ${row.original.withdrawalInShares.storageFeeRefund.toString()} - Share value: ${sharesValue} - Total: ${withdrawAmount}`}
                          >
                            {withdrawAmount} {selectedChain.token.symbol}
                          </Tooltip>
                        </div>
                      )
                    },
                  },
                  {
                    accessorKey: 'total',
                    header: 'Total Withdrawal Amount',
                    enableSorting: false,
                    cell: ({ row }) => {
                      const op = rpcOperators.find(
                        (o) => o.id === row.original.operatorId.toString(),
                      )
                      const sharesValue =
                        op && BigInt(op.currentTotalShares) > BIGINT_ZERO
                          ? (BigInt(op.currentTotalStake) * SHARES_CALCULATION_MULTIPLIER) /
                            BigInt(op.currentTotalShares)
                          : BIGINT_ZERO
                      const withdrawAmount = bigNumberToNumber(
                        ((row.original.withdrawalInShares.shares +
                          row.original.withdrawalInShares.storageFeeRefund) *
                          sharesValue) /
                          SHARES_CALCULATION_MULTIPLIER,
                      )
                      return (
                        <div>
                          {withdrawAmount} {selectedChain.token.symbol}
                        </div>
                      )
                    },
                  },
                  {
                    accessorKey: 'unlockAtConfirmedDomainBlockNumber',
                    header: 'Withdrawal at Domain Block Number',
                    enableSorting: false,
                    cell: ({ row }) => {
                      return (
                        <div>
                          {row.original.withdrawalInShares.unlockAtConfirmedDomainBlockNumber.toString()}
                        </div>
                      )
                    },
                  },
                ]}
                showNavigation={false}
                sorting={sorting}
                onSortingChange={setSorting}
                pagination={pagination}
                pageCount={pageCount}
                onPaginationChange={setPagination}
                filename='operators-my-withdrawals-list'
                pageSizeOptions={[10]}
                fullDataDownloader={fullDataDownloader}
              />
            </div>
          </div>
        </div>
      ),
    [
      fullDataDownloader,
      myPendingWithdrawals,
      pageCount,
      pagination,
      rpcOperators,
      selectedChain.token.symbol,
      sorting,
    ],
  )

  useEffect(() => {
    if (operatorId) handleSearch(operatorId)
  }, [operatorId, handleSearch])

  useEffect(() => {
    setIsVisible(inView)
  }, [inView, setIsVisible])

  return (
    <div className='flex w-full flex-col align-middle'>
      <div className='flex flex-col gap-2'>
        <div className='mt-5 flex w-full justify-between'>
          <div className='text-base font-medium text-grayDark dark:text-white'>Staking</div>
        </div>
        <div className='flex items-center'>
          <div className='mr-5 flex items-center'>
            <DataSource />
          </div>
          {subspaceAccount && (
            <div className='mr-4 flex w-40 items-center'>
              <MyPositionSwitch />
            </div>
          )}
          <DebouncedInput
            type='text'
            className='block w-full max-w-xl rounded-3xl bg-white px-4 py-[10px] text-sm text-gray-900 shadow-lg dark:bg-blueAccent dark:text-white'
            placeholder='Search by operator id'
            onChange={handleSearch}
            value={searchOperator}
          />
        </div>
      </div>
      <DataSourceBanner />
      {myUnlockedWithdrawalsList}
      {myPendingWithdrawalsList}
      <div className='mt-2 flex w-full justify-between'>
        <div className='text-base font-medium text-grayDark dark:text-white'>{`Operators (${totalLabel})`}</div>
      </div>
      <div className='mt-2 flex w-full flex-col sm:mt-0'>
        <div className='my-6 rounded' ref={ref}>
          {operatorsConnection ? (
            <SortedTable
              data={operatorsConnection}
              columns={columns}
              showNavigation={!useRpcData}
              sorting={sorting}
              onSortingChange={setSorting}
              pagination={pagination}
              pageCount={pageCount}
              onPaginationChange={setPagination}
              filename='operators-operators-list'
              pageSizeOptions={[10]}
              fullDataDownloader={fullDataDownloader}
            />
          ) : (
            noData
          )}
        </div>
      </div>
      <ActionsModal isOpen={isOpen} action={action} onClose={handleActionClose} />
    </div>
  )
}
