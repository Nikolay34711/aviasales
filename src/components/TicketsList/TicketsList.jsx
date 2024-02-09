/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Alert } from 'antd'
import fetchTickets, { getId } from '../../utils/getTickets'
import Ticket from '../Ticket/Ticket'
import cl from './TicketsList.module.scss'
import utilsSort from '../../utils/sortedTickets'
import utilsFilter from '../../utils/filterTickets'

export default function TicketsList() {
  // dispatch
  const dispatch = useDispatch()
  // state
  const [ticketsCount, setTicketsCount] = useState(5)
  // subscribe
  const activeFilter = useSelector((state) => state.filterTickets.filterTickets)
  const filterTransfers = useSelector((state) => state.filterTransfers)
  // деструктуризирую некоторые из subscribe
  const { ticketsData, stop: stopTickets, searchId } = useSelector((state) => state.ticketsData)

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
  const sortedTickets = utilsSort(ticketsData, activeFilter)

  // Сортировка билетов по filter checkbox
  const filterTickets = utilsFilter(filterTransfers, sortedTickets)
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
