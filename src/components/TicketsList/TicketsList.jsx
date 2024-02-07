import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTickets } from '../../redux/slices/TicketsData'
import Ticket from '../Ticket/Ticket'
import cl from './TicketsList.module.scss'

export default function TicketsList() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  const ticketsData = useSelector((state) => state.ticketsData.ticketsData)

  function handleShowMoreTickets() {
    dispatch(fetchTickets())
  }

  return (
    <div>
      {ticketsData.map((ticket) => (
        <Ticket key={Math.random()} ticket={ticket} />
      ))}
      <button type="button" className={cl['btn-show-more']} onClick={handleShowMoreTickets}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  )
}
