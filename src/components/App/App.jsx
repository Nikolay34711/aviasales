import React from 'react'
import { useSelector } from 'react-redux'
import { Alert, Spin } from 'antd'
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
        {/* Заголовок и лого */}
        <img className="logo" src={logo} alt="logo" />
        <h1>Welcome to AviaKataSales</h1>
        <hr />
        {/* То что будет показываться, пока билеты загражются */}
        {!stopSearch && <Spin size="large" style={{ marginTop: '30px' }} />}
        {!stopSearch && (
          <Alert
            message="Билеты подгружаются, но часть из них вы уже можете посмотреть, просто выберите кол-во пересадок которое вам подходит!"
            type="warning"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '20px',
              width: '500px',
            }}
          />
        )}
        {/* То что будет показываться, после загрузки билетов */}
        {stopSearch && (
          <Alert
            message="Все билеты успешно загружены, приятного путешествия!"
            type="success"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '20px',
              width: '500px',
            }}
          />
        )}
        {/* Основные компоненты */}
      </div>
      <FilterTransfer />
      <FilterTabsTickets />
      <TicketsList />
    </div>
  )
}
