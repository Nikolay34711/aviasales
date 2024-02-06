import { configureStore } from '@reduxjs/toolkit'
import filterTicketsReducer from './slices/filterTickets'
import filterTransfersReducer from './slices/filterTransfers'

const store = configureStore({
  reducer: {
    filterTickets: filterTicketsReducer,
    filterTransfers: filterTransfersReducer,
  },
})

export default store
