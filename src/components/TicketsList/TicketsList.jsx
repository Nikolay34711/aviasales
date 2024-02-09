/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable curly */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Alert } from 'antd'
import fetchTickets, { getId } from '../../utils/getTickets'
import Ticket from '../Ticket/Ticket'
import cl from './TicketsList.module.scss'

export default function TicketsList() {
  // dispatch
  const dispatch = useDispatch()
  // state
  const [ticketsCount, setTicketsCount] = useState(5)
  // subscribe
  const ticketsData = useSelector((state) => state.ticketsData.ticketsData)
  const activeFilter = useSelector((state) => state.filterTickets.filterTickets)
  const stopTickets = useSelector((state) => state.ticketsData.stop)
  const searchId = useSelector((state) => state.ticketsData.searchId)
  const filterTransfers = useSelector((state) => state.filterTransfers)

  // Запрос на билеты
  useEffect(() => {
    if (!stopTickets && searchId) {
      const timer = setInterval(() => {
        dispatch(fetchTickets(searchId))
      }, 200)

      return () => clearInterval(timer)
    }
  }, [stopTickets, dispatch, searchId])

  useEffect(() => {
    dispatch(getId())
  }, [dispatch])

  // Сортировка билетов по цене/скорости и оптимальности
  let sortedTickets = [...ticketsData]

  switch (activeFilter) {
    case 'cheap':
      sortedTickets.sort((a, b) => a.price - b.price)
      break
    case 'fast':
      sortedTickets.sort((prevEl, nextEl) => {
        const sum1 = prevEl.segments[0].duration + prevEl.segments[1].duration
        const sum2 = nextEl.segments[0].duration + nextEl.segments[1].duration
        return sum1 - sum2
      })
      break
    case 'optimal':
      sortedTickets.sort((prevEl, nextEl) => {
        const mult1 = prevEl.price * prevEl.segments[0].duration
        const mult2 = nextEl.price * nextEl.segments[0].duration
        return mult1 - mult2
      })
      break
    default:
      break
  }

  // Сортировка билетов по filter checkbox
  let filterTickets = []
  const noTransfersOn = filterTransfers[1].checked
  const oneTransfersOn = filterTransfers[2].checked
  const twoTransfersOn = filterTransfers[3].checked
  const threeTransfersOn = filterTransfers[4].checked

  if (noTransfersOn) {
    filterTickets = sortedTickets.filter(
      (el) => el.segments[1].stops.length === 0 && el.segments[0].stops.length === 0,
    )
  } else if (oneTransfersOn) {
    filterTickets = sortedTickets.filter(
      (el) => el.segments[1].stops.length === 1 || el.segments[0].stops.length === 1,
    )
  } else if (twoTransfersOn) {
    filterTickets = sortedTickets.filter(
      (el) => el.segments[1].stops.length === 2 || el.segments[0].stops.length === 2,
    )
  } else if (threeTransfersOn) {
    filterTickets = sortedTickets.filter(
      (el) => el.segments[1].stops.length === 3 || el.segments[0].stops.length === 3,
    )
  }
  return (
    <div>
      {filterTickets.slice(0, ticketsCount).map((ticket) => (
        <Ticket key={uuidv4()} ticket={ticket} />
      ))}
      {filterTickets.length ? (
        <button
          type="button"
          className={cl['btn-show-more']}
          onClick={() => setTicketsCount(ticketsCount + 5)}
        >
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      ) : (
        <Alert
          style={{ marginLeft: 'auto', marginRight: 'auto', width: '500px' }}
          message="К сожалению, ресов сейчас нет, или попробуйте выбрать другие фильтры!"
          type="warning"
        />
      )}
    </div>
  )
}
