/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios'

const initialState = {
  ticketsData: [],
  isLoad: false,
  error: null,
}

// eslint-disable-next-line consistent-return
export const fetchTickets = createAsyncThunk('ticketsData/fetchTickets', async () => {
  try {
    const res = await axios.get(
      'https://aviasales-test-api.kata.academy/tickets?searchId=47c9bace7ef03fc26d49b3fff19a357b',
    )
    return res.data.tickets
  } catch (error) {
    console.log(error.message)
  }
})

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
