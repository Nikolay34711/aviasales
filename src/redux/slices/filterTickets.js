/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filterTickets: '',
}

const filterTicketsSlice = createSlice({
  name: 'filterTickets',
  initialState,
  reducers: {
    setFilterTickets(state, action) {
      state.filterTickets = action.payload
    },
  },
})

export const { setFilterTickets } = filterTicketsSlice.actions

export default filterTicketsSlice.reducer
