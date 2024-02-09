/* eslint-disable react/prop-types */
import React from 'react'
import formatTime from '../../utils/formatTime'
import cl from './Ticket.module.scss'

export default function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket

  const logoUrl = `//pics.avs.io/99/36/${carrier}.png`

  return (
    <div className={cl.ticket}>
      <span className={cl.price}>{price} Р</span>
      <img className={cl.logo} src={logoUrl} alt="logo" />

      <div className={cl.flights}>
        <div className={cl.rows}>
          <div className={cl['row-top']}>
            <span>
              <span className={cl.opaci}>
                {segments[0].origin} - {segments[0].destination}
              </span>
              <span>{formatTime(segments[0])}</span>
            </span>
            <span>
              <span className={cl.opaci}>В пути</span>
              <span>
                {Math.floor(segments[0].duration / 60)}ч {segments[0].duration % 60}мин
              </span>
            </span>
            <span>
              <span className={cl.opaci}>
                {segments[0].stops.length} ПЕРЕСАДК{segments[0].stops.length < 2 ? 'А' : 'И'}
              </span>
              <span>{segments[0].stops.join(', ')}</span>
            </span>
          </div>

          <div className={cl['row-bottom']}>
            <span>
              <span className={cl.opaci}>
                {segments[1].origin} - {segments[1].destination}
              </span>
              <span>{formatTime(segments[1])}</span>
            </span>
            <span>
              <span className={cl.opaci}>В пути</span>
              <span>
                {Math.floor(segments[1].duration / 60)}ч {segments[1].duration % 60}мин
              </span>
            </span>
            <span>
              <span className={cl.opaci}>
                {segments[1].stops.length} ПЕРЕСАДК{segments[1].stops.length < 2 ? 'А' : 'И'}
              </span>
              <span>{segments[1].stops.join(', ')}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
