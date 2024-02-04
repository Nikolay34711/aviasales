import React from 'react'
import FilterTabsTickets from '../FilterTabsTickets/FilterTabsTickets'
import FilterTransfer from '../FilterTransfer/FilterTransfer'
import logo from './Logo.svg'
import './App.scss'
import TicketsList from '../TicketsList/TicketsList'

export default function App() {
  return (
    <div className="App">
      <img className='logo' src={logo} alt="logo" />
      <div className='transfers'>
        <FilterTransfer />
      </div>
      <FilterTabsTickets />
      <TicketsList />
    </div>
  )
}
