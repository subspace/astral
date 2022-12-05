import { FC } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Link } from 'react-router-dom'

// gql
import { Log } from 'gql/graphql'

// common
import Table, { Column } from 'common/components/Table'
import { INTERNAL_ROUTES } from 'common/routes'
import LogListCard from './LogListCard'

dayjs.extend(relativeTime)

interface Props {
  logs: Log[]
  isDesktop?: boolean
}

const LogTable: FC<Props> = ({ logs, isDesktop = false }) => {
  // methods
  const generateColumns = (logs: Log[]): Column[] => [
    {
      title: 'Log Index',
      cells: logs.map(({ id }) => (
        <Link key={`${id}-log-index`} to={INTERNAL_ROUTES.logs.id.page(id)}>
          <div>{id}</div>
        </Link>
      )),
    },
    {
      title: 'Block',
      cells: logs.map(({ block, id }) => <div key={`${id}-block-height`}>{block.height}</div>),
    },
    {
      title: 'Type',
      cells: logs.map(({ kind, id }) => <div key={`${id}-type`}>{kind}</div>),
    },
    {
      title: 'Engine',
      cells: logs.map(() => <></>),
    },
    {
      title: 'Data',
      cells: logs.map(() => <></>),
    },
  ]

  // constants
  const columns = generateColumns(logs)

  return isDesktop ? (
    <div className='w-full'>
      <div className='rounded my-6'>
        <Table
          columns={columns}
          emptyMessage='There are no blocks to show'
          tableProps='bg-white rounded-md'
          tableHeaderProps='border-b border-gray-200'
          id='latest-blocks'
        />
      </div>
    </div>
  ) : (
    <div className='w-full'>
      {logs.map((log) => (
        <LogListCard log={log} key={`log-list-card-${log.id}`} />
      ))}
    </div>
  )
}

export default LogTable
