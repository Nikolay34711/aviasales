import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filterTickets: '',
}

const filterTicketsSlice = createSlice({
  name: 'filterTickets',
  initialState,
  reducers: {
    setFilterTickets(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.filterTickets = action.payload
    },
  },
})

export const { setFilterTickets } = filterTicketsSlice.actions

export default filterTicketsSlice.reducer
