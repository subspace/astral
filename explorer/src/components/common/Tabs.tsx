'use client'

import React, { MouseEventHandler, ReactElement, ReactNode, useCallback, useState } from 'react'

type TabProps = {
  title: string
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <div>{children}</div>
}

type TabTitleProps = {
  title: string
  index: number
  isSelected: boolean
  setSelectedTab: (index: number) => void
  pillStyle: string
  activePillStyle: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export const TabTitle: React.FC<TabTitleProps> = ({
  title,
  setSelectedTab,
  isSelected,
  index,
  onClick,
  pillStyle,
  activePillStyle,
}) => {
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setSelectedTab(index)
      if (onClick) onClick(e)
    },
    [onClick, setSelectedTab, index],
  )

  return (
    <li className='-mb-px w-full text-center last:mr-0 lg:w-auto'>
      <button
        className={
          'block w-full rounded-full px-[13.8px] py-3 text-xs font-semibold leading-normal lg:w-auto ' +
          (isSelected ? `${activePillStyle}` : `${pillStyle}`)
        }
        onClick={handleOnClick}
      >
        {title}
      </button>
    </li>
  )
}

type TabsProps = {
  children: ReactElement[] | ReactElement
  initialIndex?: number
  pillStyle?: string
  activePillStyle?: string
  tabStyle?: string
  tabTitleStyle?: string
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  tabStyle = 'bg-white border border-slate-100 shadow rounded-lg p-4',
  tabTitleStyle = '',
  pillStyle = 'text-gray-600 bg-white dark:bg-transparent dark:text-white',
  activePillStyle = 'text-white bg-grayDarker dark:bg-blueAccent',
}) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className={`flex flex-wrap ${tabStyle}`}>
      <div className='w-full'>
        <ul
          className={`flex w-full list-none flex-row flex-wrap pb-4 pt-3 ${tabTitleStyle}`}
          role='tablist'
        >
          {Array.isArray(children) ? (
            children.map((item, index) => (
              <TabTitle
                key={index}
                title={item.props.title}
                onClick={item.props.onClick}
                index={index}
                isSelected={selectedTab === index}
                setSelectedTab={setSelectedTab}
                pillStyle={pillStyle}
                activePillStyle={activePillStyle}
              />
            ))
          ) : (
            <TabTitle
              title={children.props.title}
              onClick={children.props.onClick}
              index={0}
              isSelected={selectedTab === 0}
              setSelectedTab={setSelectedTab}
              pillStyle={pillStyle}
              activePillStyle={activePillStyle}
            />
          )}
        </ul>
        {Array.isArray(children) ? children[selectedTab] : children}
      </div>
    </div>
  )
}
