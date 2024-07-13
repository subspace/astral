'use client'

import { Transaction } from '@/types/transaction'
import { TrashIcon } from '@heroicons/react/24/outline'
import { Accordion } from 'components/common/Accordion'
import { List, StyledListItem } from 'components/common/List'
import { StatusIcon } from 'components/common/StatusIcon'
import { Tooltip } from 'components/common/Tooltip'
import type { Chain } from 'constants/chains'
import { ROUTE_EXTRA_FLAG_TYPE, ROUTE_FLAG_VALUE_OPEN_CLOSE } from 'constants/routes'
import { TransactionStatus } from 'constants/transaction'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { PendingTransactionQuery, PendingTransactionQueryVariables } from 'gql/oldSquidTypes'
import { useSquidQuery } from 'hooks/useSquidQuery'
import useWallet from 'hooks/useWallet'
import { useWindowFocus } from 'hooks/useWindowFocus'
import { useSearchParams } from 'next/navigation'
import { FC, useCallback, useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { useTransactionsStates } from 'states/transactions'
import { shortString } from 'utils/string'
import { QUERY_PENDING_TX } from './query'

interface PendingTransactionsProps {
  subspaceAccount: string
  selectedChain: Chain
}

dayjs.extend(relativeTime)

export const PendingTransactions: FC<PendingTransactionsProps> = ({
  subspaceAccount,
  selectedChain,
}) => {
  const { ref, inView } = useInView()
  const inFocus = useWindowFocus()
  const { get } = useSearchParams()
  const isSideKickOpen = get(ROUTE_EXTRA_FLAG_TYPE.WALLET_SIDEKICK)

  const { actingAccount } = useWallet()
  const {
    pendingTransactions,
    removePendingTransactions,
    markAsFinalized,
    moveToFinalizedTransactions,
  } = useTransactionsStates()

  const variables = useMemo(
    () => ({
      subspaceAccount,
      extrinsics: pendingTransactions.map((tx) => tx.txHash),
    }),
    [pendingTransactions, subspaceAccount],
  )
  const { data, setIsVisible } = useSquidQuery<
    PendingTransactionQuery,
    PendingTransactionQueryVariables
  >(QUERY_PENDING_TX, {
    variables,
    skip: !inFocus || isSideKickOpen !== ROUTE_FLAG_VALUE_OPEN_CLOSE.OPEN,
    pollInterval: 6000,
  })

  const handleRemove = useCallback(
    (tx: Transaction) => removePendingTransactions(tx),
    [removePendingTransactions],
  )

  const transactions = useMemo(
    () =>
      actingAccount
        ? pendingTransactions
            .filter(
              (tx) =>
                tx.chain &&
                actingAccount.address === tx.from &&
                selectedChain.urls.page == tx.chain.urls.page,
            )
            .sort((a, b) => b.submittedAtBlockNumber - a.submittedAtBlockNumber)
        : [],
    [actingAccount, pendingTransactions, selectedChain.urls.page],
  )

  const timeNowPlus2min = new Date(new Date().getTime() + 2 * 60000).getTime() // 2 minutes from now
  const moveIfPending = useCallback(
    (extrinsics: PendingTransactionQuery['accounts'][0]['extrinsics']) => {
      const extrinsicsHash = extrinsics.map((e) => e.hash.toLowerCase())
      if (!transactions || transactions.length === 0) return
      try {
        transactions
          .filter((tx) => extrinsicsHash.includes(tx.txHash.toLowerCase()))
          .map((tx) => {
            const extrinsic = extrinsics.find((e) => e.hash === tx.txHash)
            if (!extrinsic) return
            markAsFinalized(
              tx,
              extrinsic.success ? TransactionStatus.Success : TransactionStatus.Failed,
            )
            if (new Date(tx.submittedAtLocalTimestamp).getTime() < timeNowPlus2min)
              moveToFinalizedTransactions(tx)
          })
      } catch (error) {
        console.error('Error in moveIfPending', error)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [transactions],
  )

  useEffect(() => {
    setIsVisible(inView)
  }, [inView, setIsVisible])

  useEffect(() => {
    if (data) moveIfPending(data.accounts[0].extrinsics)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div
      ref={ref}
      className='m-2 mt-0 rounded-[20px] bg-grayLight p-5 dark:bg-blueAccent dark:text-white'
    >
      <Accordion
        title={
          <div className='m-2 mb-0 flex items-center pt-4'>
            <span className='text-base font-medium text-grayDarker dark:text-white'>
              Pending transactions {transactions.length > 0 ? `( ${transactions.length} )` : ''}{' '}
            </span>
          </div>
        }
      >
        {transactions && transactions.length > 0 ? (
          <List>
            {transactions.map((tx, index) => {
              const txs = tx.call.split('.')
              const txName = txs.length > 1 ? txs[1].toUpperCase() : tx.call.toUpperCase()
              return (
                <StyledListItem
                  key={index}
                  title={
                    <div className='flex flex-col'>
                      {txName}
                      <Tooltip text={dayjs(tx.submittedAtLocalTimestamp).toString()}>
                        <span className='mr-2 text-sm font-medium text-grayDarker dark:text-gray-400'>
                          {dayjs(tx.submittedAtLocalTimestamp).fromNow(true)}
                        </span>
                      </Tooltip>
                    </div>
                  }
                >
                  <div className='flex flex-col'>
                    <span className='mr-2 text-sm font-medium text-grayDarker dark:text-gray-400'>
                      {shortString(tx.txHash)}
                    </span>
                    <span className='mr-2 text-sm font-medium text-grayDarker dark:text-gray-400'>
                      #{tx.submittedAtBlockNumber}
                    </span>
                  </div>
                  <div className='m-2 p-2'>
                    <StatusIcon status={tx.status !== TransactionStatus.Pending} />
                  </div>
                  <div className='m-2 p-2'>
                    <TrashIcon className='size-5' stroke='red' onClick={() => handleRemove(tx)} />
                  </div>
                </StyledListItem>
              )
            })}
          </List>
        ) : (
          <div className='m-2 flex items-center pt-4'>
            <span className='text-sm font-medium text-grayDarker dark:text-white'>
              You have no pending transactions
            </span>
          </div>
        )}
      </Accordion>
    </div>
  )
}
