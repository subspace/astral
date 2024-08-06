'use client'

import { WalletIcon } from '@heroicons/react/24/outline'
import { PreferredExtensionModal } from 'components/layout/PreferredExtensionModal'
import useMediaQuery from 'hooks/useMediaQuery'
import React, { useCallback, useState } from 'react'

type WalletButtonProps = {
  className?: string
}

export const WalletButton: React.FC<WalletButtonProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setIsOpen(true)
  }, [])
  const onClose = useCallback(() => setIsOpen(false), [])

  return (
    <>
      <button
        onClick={onClick}
        className={
          className
            ? className
            : `h-10 ${
                isDesktop ? 'w-36' : 'w-10 p-2'
              } rounded-full bg-gradient-to-r from-pinkAccent to-purpleDeepAccent font-medium text-white`
        }
      >
        {isDesktop ? 'Connect Wallet' : <WalletIcon className='size-6' />}
      </button>
      <PreferredExtensionModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
