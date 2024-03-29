/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react'

type Props = {
  title?: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: FC<Props> = ({ title = '', isOpen, onClose, children }) => {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        isOpen ? 'visible bg-black/20 z-20' : 'invisible'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all dark:bg-gradient-to-r dark:from-[#4141B3] dark:via-[#6B5ACF] dark:to-[#896BD2] ${
          isOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        <div className='absolute top-2 left-6  leading-relaxed text-xl font-medium text-center dark:text-white'>
          {title}
        </div>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 p-1 text-gray-400 hover:bg-[#DE67E4]/75 hover:text-gray-600 dark:text-white dark:hover:bg-[#DE67E4]/75 dark:hover:text-gray-800'
        >
          X
        </button>

        <div className='mt-8'>{children}</div>
      </div>
    </div>
  )
}

export default Modal
