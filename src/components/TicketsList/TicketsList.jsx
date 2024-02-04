/* eslint-disable react/button-has-type */
import React from 'react'
import Ticket from '../Ticket/Ticket'
import cl from './TicketsList.module.scss'

export default function TicketsList() {
  return (
    <div>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <button className={cl['btn-show-more']}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
    </div>
  )
}
