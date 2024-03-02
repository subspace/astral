import { CpuChipIcon, GlobeAltIcon, QueueListIcon, TrophyIcon } from '@heroicons/react/24/outline'
import { FC, useCallback, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// layout
import useDomains from 'common/hooks/useDomains'
import chains from 'layout/config/chains.json'
import domains from 'layout/config/domains.json'
import { DOMAINS, DOMAINS_NAMES } from 'layout/constants'

// common
import { ConnectWalletButton } from 'common/components/ConnectWalletButton'
import IndexingError from 'common/components/IndexingError'
import useMediaQuery from 'common/hooks/useMediaQuery'
import useWallet from 'common/hooks/useWallet'

// chains
import AccountListDropdown from './AccountListDropdown'
import { WalletSidekick } from './WalletSidekick'

const DomainHeader: FC = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const location = useLocation()
  const pathName = location.pathname

  const navigate = useNavigate()

  const { setSelectedChain, selectedChain, setSelectedDomain } = useDomains()
  const { actingAccount } = useWallet()

  const handleDomainSelected = useCallback(
    (domain: string) => {
      setSelectedDomain(domain)
      if (domain === DOMAINS_NAMES.nova) setSelectedChain(domains[0])
      else setSelectedChain(chains[0])
      navigate(`/${selectedChain.urls.page}/${domain}`)
    },
    [navigate, setSelectedChain, setSelectedDomain, selectedChain.urls.page],
  )

  const domainIcon = useCallback((domain: (typeof DOMAINS)[0]) => {
    const className = 'w-6 h-6 text-[#282929] dark:text-white'
    switch (domain.name) {
      case DOMAINS_NAMES.nova:
        return <GlobeAltIcon className={className} />
      case DOMAINS_NAMES.consensus:
        return <QueueListIcon className={className} />
      case DOMAINS_NAMES.leaderboard:
        return <TrophyIcon className={className} />
      case DOMAINS_NAMES.operators:
        return <CpuChipIcon className={className} />
      default:
        return null
    }
  }, [])

  const domainsOptions = useMemo(
    () =>
      DOMAINS.map((item, index) => {
        const isActive = pathName.includes(`${selectedChain.urls.page}/${item.name}`)
        return (
          <div className='text-[13px] font-semibold items-center flex' key={`${item}-${index}`}>
            <button
              onClick={() => handleDomainSelected(item.name)}
              className={
                isActive
                  ? 'bg-[#241235] rounded-full py-2 px-4 dark:bg-[#DE67E4] text-white'
                  : 'bg-white text-[#282929] dark:text-white dark:bg-[#1E254E]'
              }
            >
              {isDesktop ? item.title : domainIcon(item)}
            </button>
          </div>
        )
      }),
    [handleDomainSelected, isDesktop, pathName, selectedChain.urls.page, domainIcon],
  )

  return (
    <div
      className='w-full h-[60px] bg-white dark:bg-[#1E254E] z-10'
      id='accordion-open'
      data-accordion='open'
    >
      <div className='w-full flex justify-between container py-3 items-center px-5 md:px-[25px] 2xl:px-0 mx-auto pb-2'>
        <div className='flex gap-9'>{domainsOptions}</div>
        <div className='flex gap-4'>
          {!actingAccount ? (
            <ConnectWalletButton />
          ) : (
            <div className='flex'>
              <AccountListDropdown />
              <WalletSidekick />
            </div>
          )}
        </div>
      </div>
      {pathName.includes('gemini-3h') && (
        <div className='w-full sticky'>
          <IndexingError />
        </div>
      )}
    </div>
  )
}

export default DomainHeader
