import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// const getId = async () => {
//   try {
//     const res = await axios.get('https://aviasales-test-api.kata.academy/search')
//     return res.data.searchId
//   } catch (error) {
//     throw error.message
//   }
// }

export const getId = createAsyncThunk('tickets/fetchTickets', async () => {
  try {
    const res = await axios.get('https://aviasales-test-api.kata.academy/search')
    return res.data.searchId
  } catch (error) {
    throw error.message
  }
})

const fetchTickets = createAsyncThunk('ticketsData/fetchTickets', async (searchId) => {
  try {
    const res = await axios.get(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
    )
    return res.data
  } catch (error) {
    throw error.message
  }
})

export default fetchTickets
