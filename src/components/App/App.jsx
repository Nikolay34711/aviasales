/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
import { Alert, Spin } from 'antd'
import FilterTabsTickets from '../FilterTabsTickets/FilterTabsTickets'
import FilterTransfer from '../FilterTransfers/FilterTransfer'
import TicketsList from '../TicketsList/TicketsList'
import logo from '../../icon/Logo.svg'
import './App.scss'

const LoadingMessage = ({ message, type }) => (
  <Alert
    message={message}
    type={type}
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '20px',
      width: '500px',
    }}
  />
)

const App = () => {
  const stopSearch = useSelector((state) => state.ticketsData.stop)

  return (
    <div className="App">
      <div className="title">
        <img className="logo" src={logo} alt="logo" />
        <h1>Welcome to AviaWhiteCodeSales</h1>
        <hr />
        {!stopSearch && (
          <>
            <Spin size="large" style={{ marginTop: '30px' }} />
            <LoadingMessage
              message="Билеты подгружаются, но часть из них вы уже можете посмотреть!"
              type="warning"
            />
          </>
        )}
        {stopSearch && (
          <LoadingMessage
            message="Все билеты успешно загружены, приятного путешествия!"
            type="success"
          />
        )}
      </div>
      <FilterTransfer />
      <FilterTabsTickets />
      <TicketsList />
    </div>
  )
}

export default App
