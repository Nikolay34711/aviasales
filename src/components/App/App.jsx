import React from 'react'
import FilterTabsTickets from '../FilterTabsTickets/FilterTabsTickets'
import FilterTransfer from '../FilterTransfer/FilterTransfer'
import logo from './Logo.svg'
import './App.scss'

export default function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <FilterTransfer />
      <FilterTabsTickets />
    </div>
  )
}
