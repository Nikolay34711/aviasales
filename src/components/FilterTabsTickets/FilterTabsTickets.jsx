/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterTickets } from '../../redux/slices/filterTickets'
import cl from './FilterTabsTickets.module.scss'

export default function FilterTabsTickets() {
  const dispatch = useDispatch()

  const activeFilter = useSelector((state) => state.filterTickets.filterTickets)

  function handleTicketsFilter(name) {
    dispatch(setFilterTickets(name))
  }

  const buttons = [
    { name: 'cheap', label: 'САМЫЙ ДЕШЕВЫЙ', classNames: [cl['btn-tabs'], cl['btn-left']] },
    { name: 'fast', label: 'САМЫЙ БЫСТРЫЙ', classNames: [cl['btn-tabs']] },
    { name: 'optimal', label: 'ОПТИМАЛЬНЫЙ', classNames: [cl['btn-tabs'], cl['btn-right']] },
  ]

  return (
    <div className={cl['container-filter']}>
      <div className={cl['container-filter']}>
        {buttons.map(({ name, classNames, label }) => (
          <button
            key={Math.random()}
            className={
              activeFilter === name
                ? [...classNames, cl['btn-active']].join(' ')
                : classNames.join(' ')
            }
            type="button"
            onClick={() => handleTicketsFilter(name)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
