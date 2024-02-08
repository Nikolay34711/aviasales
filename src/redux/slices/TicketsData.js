/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import fetchTickets from '../../utils/getTickets'

const initialState = {
  ticketsData: [],
  isLoad: false,
  error: null,
}

const ticketsData = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.isLoad = true
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.isLoad = false
        state.ticketsData = action.payload
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.isLoad = false
        state.error = action.error.message
      })
  },
})

export default ticketsData.reducer
