import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getId = async () => {
  try {
    const res = await axios.get('https://aviasales-test-api.kata.academy/search')
    return res.data.searchId
  } catch (error) {
    throw error.message
  }
}

const fetchTickets = createAsyncThunk('ticketsData/fetchTickets', async () => {
  try {
    const searchId = await getId()
    const res = await axios.get(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
    )
    return res.data.tickets
  } catch (error) {
    throw error.message
  }
})

export default fetchTickets
