import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { filter: 'all', checked: false },
  { filter: 'noTransfers', checked: false },
  { filter: 'oneTransfers', checked: false },
  { filter: 'twoTransfers', checked: false },
  { filter: 'threeTransfers', checked: false },
]

const filterTransfers = createSlice({
  name: 'filterTransfers',
  initialState,
  reducers: {
    setFilterCheckbox(state, action) {
      return state.map((filterName) =>
        filterName.filter === action.payload
          ? { ...filterName, checked: !filterName.checked }
          : filterName,
      )
    },
  },
})

const filterTicketsReducer = filterTransfers.reducer
export default filterTicketsReducer

const { setFilterCheckbox } = filterTransfers.actions

export { setFilterCheckbox }
