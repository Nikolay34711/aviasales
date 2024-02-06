import React from 'react'
import FilterTabsTickets from '../FilterTabsTickets/FilterTabsTickets'
import FilterTransfer from '../FilterTransfers/FilterTransfer'
import logo from './Logo.svg'
import './App.scss'
import TicketsList from '../TicketsList/TicketsList'

export default function App() {
  return (
    <div className="App">
      <div className="title">
        {' '}
        <img className="logo" src={logo} alt="logo" />
        <h1>Welcome to AviaKataSales</h1>
        <hr />
      </div>
      <FilterTransfer />
      <FilterTabsTickets />
      <TicketsList />
    </div>
  )
}
