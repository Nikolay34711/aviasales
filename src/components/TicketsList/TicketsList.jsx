import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
import fetchTickets, { getId } from '../../utils/getTickets'
import Ticket from '../Ticket/Ticket'
import cl from './TicketsList.module.scss'

export default function TicketsList() {
  const dispatch = useDispatch()
  const [ticketsCount, setTicketsCount] = useState(5)
  const ticketsData = useSelector((state) => state.ticketsData.ticketsData)
  const activeFilter = useSelector((state) => state.filterTickets.filterTickets)
  const stopTickets = useSelector((state) => state.ticketsData.stop)
  const searchId = useSelector((state) => state.ticketsData.searchId)

  useEffect(() => {
    if (stopTickets) {
      return
    }
    if (searchId === '') {
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const timer = setInterval(() => {
      dispatch(fetchTickets(searchId))
    }, 200)

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(timer)
    }
  }, [stopTickets, dispatch, searchId])

  useEffect(() => {
    dispatch(getId())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line prefer-const
  let sortedTickets = [...ticketsData]

  switch (activeFilter) {
    case 'cheap':
      sortedTickets.sort((a, b) => a.price - b.price)
      break
    case 'fast':
      sortedTickets.sort((prevEl, nextEl) => {
        const forwardPrev = prevEl.segments[0]
        const forwardNext = nextEl.segments[0]
        const backPrev = prevEl.segments[1]
        const backNext = nextEl.segments[1]
        const sum1 = forwardPrev.duration + backPrev.duration
        const sum2 = forwardNext.duration + backNext.duration
        return sum1 - sum2
      })
      break
    case 'optimal':
      sortedTickets.sort((prevEl, nextEl) => {
        const forwardPrev = prevEl.segments[0]
        const forwardNext = nextEl.segments[0]
        const mult1 = prevEl.price * forwardPrev.duration
        const mult2 = prevEl.price * forwardNext.duration
        return mult1 - mult2
      })
      break

    default:
      break
  }

  function handleShowMoreTickets() {
    setTicketsCount((prev) => prev + 5)
  }

  return (
    <div>
      {sortedTickets.slice(0, ticketsCount).map((ticket) => (
        <Ticket key={v4()} ticket={ticket} />
      ))}
      {ticketsData.length && (
        <button type="button" className={cl['btn-show-more']} onClick={handleShowMoreTickets}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </div>
  )
}
