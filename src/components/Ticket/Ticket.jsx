/* eslint-disable react/prop-types */
import React from 'react'
import { v4 } from 'uuid'
import formatTime from '../../utils/formatTime'
import wordEndings from '../../utils/wordEndings'
import cl from './Ticket.module.scss'

const FlightSegment = ({ segment }) => {
  return (
    <span>
      <span className={cl.opaci}>
        {segment.origin} - {segment.destination}
      </span>
      <span>{formatTime(segment)}</span>
    </span>
  )
}

const FlightInfo = ({ segment }) => {
  return (
    <span>
      <span className={cl.opaci}>В пути</span>
      <span>
        {Math.floor(segment.duration / 60)}ч {segment.duration % 60}мин
      </span>
    </span>
  )
}

const FlightStops = ({ stops }) => {
  return (
    <span>
      <span className={cl.opaci}>
        {stops.length === 0 ? '' : stops.length} {wordEndings(stops.length)}
      </span>
      <span>{stops.join(', ')}</span>
    </span>
  )
}

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket
  const logoUrl = `//pics.avs.io/99/36/${carrier}.png`

  return (
    <div className={cl.ticket}>
      <span className={cl.price}>{price} Р</span>
      <img className={cl.logo} src={logoUrl} alt="logo" />
      <div className={cl.flights}>
        <div className={cl.rows}>
          {segments.map((segment, index) => (
            <div key={v4()} className={index === 0 ? cl['row-top'] : cl['row-bottom']}>
              <FlightSegment segment={segment} />
              <FlightInfo segment={segment} />
              <FlightStops stops={segment.stops} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ticket
