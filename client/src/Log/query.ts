import { gql } from '@apollo/client'

export const QUERY_LOG_CONNECTION_LIST = gql`
  query LogsConnection($first: Int!, $after: String, $where: LogWhereInput) {
    logsConnection(orderBy: id_DESC, first: $first, after: $after, where: $where) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        node {
          id
          kind
          value
          block {
            id
            height
            timestamp
          }
        }
        cursor
      }
    }
    logTypesQuery {
      result
    }
  }
`

export const QUERY_LOG_BY_ID = gql`
  query LogById($logId: String!) {
    logById(id: $logId) {
      id
      kind
      value
      block {
        id
        height
        timestamp
        events(limit: 10, orderBy: id_DESC) {
          id
          args
          name
          phase
          indexInBlock
          timestamp
          block {
            height
            hash
          }
        }
      }
    }
  }
`
