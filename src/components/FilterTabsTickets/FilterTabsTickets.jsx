/* eslint-disable dot-notation */
import React from 'react'
import cl from './FilterTabsTickets.module.scss'

export default function FilterTabsTickets() {
  return (
    <div className={cl['container-filter']}>
      <button className={[cl['btn-reset'], cl['btn-tabs'], cl['btn-left']].join(' ')} type="button">
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className={[cl['btn-reset'], cl['btn-tabs']].join(' ')} type="button">
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={[cl['btn-reset'], cl['btn-tabs'], cl['btn-right']].join(' ')}
        type="button"
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}
