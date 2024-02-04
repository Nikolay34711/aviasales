import React from 'react'
import logo from './S7 Logo.svg'
import cl from './Ticket.module.scss'

export default function Ticket() {
  return (
    <div className={cl.ticket}>
      <span className={cl.price}>13 400</span>
      <img className={cl.logo} src={logo} alt="logo" />

      <div className={cl.flights}>
        <div className={cl.rows}>
          <div className={cl['row-top']}>
            <span>
              <span>MOW - HKT</span>
              <span>10:45 - 08:00</span>
            </span>
            <span>
              <span>В пути</span>
              <span>21ч 15мин</span>
            </span>
            <span>
              <span>2 ПЕРЕСАДКИ</span>
              <span>HKG, JNB</span>
            </span>
          </div>

          <div className={cl['row-bottom']}>
            <span>
              <span>MOW - HKT</span>
              <span>11:20 - 00:50</span>
            </span>
            <span>
              <span>В пути</span>
              <span>13ч 30мин</span>
            </span>
            <span>
              <span>1 ПЕРЕСАДКИ</span>
              <span>HKG</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
