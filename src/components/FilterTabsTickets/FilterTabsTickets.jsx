import React from 'react'
import cl from './FilterTabsTickets.module.scss'

export default function FilterTabsTickets() {
  return (
    <div className={cl.containerFilter}>
      <button className={[cl.btnReset, cl.btnTabs, cl.btnLeft].join(' ')} type="button">
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className={[cl.btnReset, cl.btnTabs].join(' ')} type="button">
        САМЫЙ БЫСТРЫЙ
      </button>
      <button className={[cl.btnReset, cl.btnTabs, cl.btnRight].join(' ')} type="button">
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}
