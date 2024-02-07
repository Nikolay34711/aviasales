/* eslint-disable react/prop-types */
import React from 'react'
import { format, add } from 'date-fns'
import logo from './S7 Logo.svg'
import cl from './Ticket.module.scss'

export default function Ticket({ ticket }) {
  const { price, segments } = ticket

  const formatFlightTime = (segment) => {
    const startTime = new Date(segment.date)
    const endTime = add(startTime, { minutes: segment.duration })
    return `${format(startTime, 'HH:mm')} – ${format(endTime, 'HH:mm')}`
  }

  return (
    <div className={cl.ticket}>
      <span className={cl.price}>{price}</span>
      <img className={cl.logo} src={logo} alt="logo" />

      <div className={cl.flights}>
        <div className={cl.rows}>
          <div className={cl['row-top']}>
            <span>
              <span>
                {segments[0].origin} - {segments[0].destination}
              </span>
              <span>{formatFlightTime(segments[0])}</span>
            </span>
            <span>
              <span>В пути</span>
              <span>
                {Math.floor(segments[0].duration / 60)}ч {segments[0].duration % 60}мин
              </span>
            </span>
            <span>
              <span>
                {segments[0].stops.length} ПЕРЕСАДК{segments[0].stops.length === 1 ? 'КА' : 'И'}
              </span>
              <span>{segments[0].stops.join(', ')}</span>
            </span>
          </div>

          <div className={cl['row-bottom']}>
            <span>
              <span>
                {segments[1].origin} - {segments[1].destination}
              </span>
              <span>{formatFlightTime(segments[1])}</span>
            </span>
            <span>
              <span>В пути</span>
              <span>
                {Math.floor(segments[1].duration / 60)}ч {segments[1].duration % 60}мин
              </span>
            </span>
            <span>
              <span>
                {segments[1].stops.length} ПЕРЕСАДК{segments[1].stops.length === 1 ? 'КА' : 'И'}
              </span>
              <span>{segments[1].stops.join(', ')}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
