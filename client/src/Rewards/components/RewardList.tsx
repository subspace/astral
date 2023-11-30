import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useErrorHandler } from 'react-error-boundary'

// common
import { Pagination, Spinner } from 'common/components'
import { PAGE_SIZE } from 'common/constants'
import useDomains from 'common/hooks/useDomains'
import ExportButton from 'common/components/ExportButton'
import NotAllowed from 'common/components/NotAllowed'

// reward
import RewardTable from './RewardTable'
import { QUERY_REWARDS_LIST } from 'Rewards/querys'

const RewardList = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [lastCursor, setLastCursor] = useState<string | undefined>(undefined)
  const { selectedChain } = useDomains()

  const { data, error, loading } = useQuery(QUERY_REWARDS_LIST, {
    variables: { first: PAGE_SIZE, after: lastCursor },
    pollInterval: 6000,
  })

  useErrorHandler(error)

  if (loading) {
    return <Spinner />
  }

  if (selectedChain.title !== 'Gemini 3g' || selectedChain.isDomain) {
    return <NotAllowed />
  }

  const accountsConnection = data.accountsConnection.edges.map((account) => account.node)
  const totalCount = data.accountsConnection.totalCount
  // const totalLabel = numberWithCommas(Number(totalCount))

  const pageInfo = data.accountsConnection.pageInfo

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1)
    setLastCursor(pageInfo.endCursor)
  }

  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1)
    setLastCursor(pageInfo.endCursor)
  }

  const onChange = (page: number) => {
    setCurrentPage(Number(page))

    const newCount = page > 0 ? PAGE_SIZE * Number(page + 1) : PAGE_SIZE
    const endCursor = newCount - PAGE_SIZE

    if (endCursor === 0 || endCursor < 0) {
      return setLastCursor(undefined)
    }
    setLastCursor(endCursor.toString())
  }

  return (
    <div className='w-full flex flex-col align-middle'>
      <div className='w-full grid lg:grid-cols-2'>
        <div className='text-[#282929] text-base font-medium dark:text-white'>
          Testnet Leaderboard
        </div>
      </div>
      <div className='w-full flex justify-between mt-7'>
        <div className='text-[#282929] text-base font-thin dark:text-white'>
          Subspace Network Block and Vote rewards leaderboard
        </div>
      </div>
      <div className='w-full flex flex-col mt-t sm:mt-0'>
        <RewardTable accounts={accountsConnection} page={currentPage} />
        <div className='w-full flex justify-between gap-2'>
          <ExportButton data={accountsConnection} filename='account-list' />
          <Pagination
            nextPage={handleNextPage}
            previousPage={handlePreviousPage}
            currentPage={currentPage}
            pageSize={PAGE_SIZE}
            totalCount={totalCount}
            hasNextPage={pageInfo.hasNextPage}
            hasPreviousPage={pageInfo.hasPreviousPage}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}

export default RewardList