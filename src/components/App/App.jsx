import React from 'react'
import { useSelector } from 'react-redux'
import { Spin } from 'antd'
import FilterTabsTickets from '../FilterTabsTickets/FilterTabsTickets'
import FilterTransfer from '../FilterTransfers/FilterTransfer'
import TicketsList from '../TicketsList/TicketsList'
import logo from '../../icon/Logo.svg'
import './App.scss'

export default function App() {
  const stopSearch = useSelector((state) => state.ticketsData.stop)

  return (
    <div className="App">
      <div className="title">
        {' '}
        <img className="logo" src={logo} alt="logo" />
        <h1>Welcome to AviaKataSales</h1>
        <hr />
        {!stopSearch && <Spin size="large" style={{ marginTop: '30px' }} />}
      </div>
      <FilterTransfer />
      <FilterTabsTickets />
      <TicketsList />
    </div>
  )
}
