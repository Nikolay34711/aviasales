import { configureStore } from '@reduxjs/toolkit'
import filterTicketsReducer from './slices/filterTickets'
import filterTransfersReducer from './slices/filterTransfers'
import ticketsDataReducer from './slices/TicketsData'

const store = configureStore({
  reducer: {
    filterTickets: filterTicketsReducer,
    filterTransfers: filterTransfersReducer,
    ticketsData: ticketsDataReducer,
  },
})

export default store
