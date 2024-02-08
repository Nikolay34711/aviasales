/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import fetchTickets, { getId } from '../../utils/getTickets'

const initialState = {
  ticketsData: [],
  isLoad: false,
  error: null,
  searchId: null,
  stop: false,
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
        if (state.ticketsData.length) {
          state.isLoad = false
        } else {
          state.isLoad = true
        }

        state.ticketsData.push(...action.payload.tickets)
        state.stop = action.payload.stop
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.isLoad = false
        state.error = action.error.message
      })
      .addCase(getId.pending, (state) => {
        state.isLoad = true
      })
      .addCase(getId.fulfilled, (state, action) => {
        state.isLoad = true
        state.searchId = action.payload
      })
      .addCase(getId.rejected, (state, action) => {
        state.isLoad = true
        state.error = action.error.message
      })
  },
})

export default ticketsData.reducer
