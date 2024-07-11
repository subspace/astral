'use client'

import { useEvmExplorerBanner } from 'components/common/EvmExplorerBanner'
import { Spinner } from 'components/common/Spinner'
import { NotFound } from 'components/layout/NotFound'
import { Routes } from 'constants/routes'
import {
  BlockByIdDomainQueryVariables,
  BlockByIdQueryVariables,
  Block as BlockResult,
} from 'gql/graphql'
import useDomains from 'hooks/useDomains'
import useMediaQuery from 'hooks/useMediaQuery'
import { useSquidQuery } from 'hooks/useSquidQuery'
import { useWindowFocus } from 'hooks/useWindowFocus'
import { useParams } from 'next/navigation'
import { FC, useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { hasValue, isLoading, useQueryStates } from 'states/query'
import type { BlockIdParam } from 'types/app'
import { BlockByIdDomainQuery, BlockByIdQuery } from '../gql/graphql'
import { BlockDetailsCard } from './BlockDetailsCard'
import { BlockDetailsTabs } from './BlockDetailsTabs'
import { QUERY_BLOCK_BY_ID, QUERY_BLOCK_BY_ID_DOMAIN } from './query'

export const Block: FC = () => {
  const { ref, inView } = useInView()
  const { blockId } = useParams<BlockIdParam>()
  const { selectedChain } = useDomains()
  const novaExplorerBanner = useEvmExplorerBanner('block/' + blockId)
  const isDesktop = useMediaQuery('(min-width: 640px)')
  const inFocus = useWindowFocus()

  const query = useMemo(
    () => (selectedChain.isDomain ? QUERY_BLOCK_BY_ID_DOMAIN : QUERY_BLOCK_BY_ID),
    [selectedChain.isDomain],
  )
  const { setIsVisible } = useSquidQuery<
    BlockByIdDomainQuery | BlockByIdQuery,
    BlockByIdDomainQueryVariables | BlockByIdQueryVariables
  >(
    query,
    {
      variables: { blockId: Number(blockId) },
      skip: !inFocus,
    },
    selectedChain?.isDomain ? Routes.nova : Routes.consensus,
    'block',
  )

  const {
    consensus: { block: consensusEntry },
    nova: { block: evmEntry },
  } = useQueryStates()

  const loading = useMemo(() => {
    if (selectedChain?.isDomain) return isLoading(evmEntry)
    return isLoading(consensusEntry)
  }, [evmEntry, consensusEntry, selectedChain])

  const data = useMemo(() => {
    if (selectedChain?.isDomain && hasValue(evmEntry)) return evmEntry.value
    if (hasValue(consensusEntry)) return consensusEntry.value
  }, [consensusEntry, evmEntry, selectedChain])

  const block = useMemo(() => data && (data.blocks[0] as BlockResult), [data])

  const noData = useMemo(() => {
    if (loading) return <Spinner />
    if (!data) return <NotFound />
    return null
  }, [data, loading])

  useEffect(() => {
    setIsVisible(inView)
  }, [inView, setIsVisible])

  return (
    <div className='w-full'>
      {novaExplorerBanner}
      <div ref={ref}>
        {block ? (
          <>
            <BlockDetailsCard block={block} isDesktop={isDesktop} />
            <BlockDetailsTabs
              logs={block.logs}
              extrinsicsCount={block.extrinsicsCount}
              eventsCount={block.eventsCount}
              isDesktop={isDesktop}
            />
          </>
        ) : (
          noData
        )}
      </div>
    </div>
  )
}
