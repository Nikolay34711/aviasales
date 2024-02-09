import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Alert } from 'antd'
import fetchTickets, { getId } from '../../utils/getTickets'
import Ticket from '../Ticket/Ticket'
import cl from './TicketsList.module.scss'
import utilsSort from '../../utils/sortedTickets'
import utilsFilter from '../../utils/filterTickets'

export default function TicketsList() {
  const dispatch = useDispatch()

  const [ticketsCount, setTicketsCount] = useState(5)

  const activeFilter = useSelector((state) => state.filterTickets.filterTickets)
  const filterTransfers = useSelector((state) => state.filterTransfers)
  const { ticketsData, stop: stopTickets, searchId } = useSelector((state) => state.ticketsData)

  useEffect(() => {
    if (!stopTickets && searchId) {
      const timer = setInterval(() => {
        dispatch(fetchTickets(searchId))
      }, 200)

      return () => clearInterval(timer)
    }
    return undefined
  }, [stopTickets, dispatch, searchId])

  useEffect(() => {
    dispatch(getId())
  }, [dispatch])

  const sortedTickets = useMemo(
    () => utilsSort(ticketsData, activeFilter),
    [ticketsData, activeFilter],
  )

  const filterTickets = useMemo(
    () => utilsFilter(filterTransfers, sortedTickets),
    [filterTransfers, sortedTickets],
  )

  return (
    <>
      {filterTickets.slice(0, ticketsCount).map((ticket) => (
        <Ticket key={uuidv4()} ticket={ticket} />
      ))}
      {filterTickets.length ? (
        <button
          type="button"
          className={cl['btn-show-more']}
          onClick={() => setTicketsCount((prevCount) => prevCount + 5)}
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
    </>
  )
}
