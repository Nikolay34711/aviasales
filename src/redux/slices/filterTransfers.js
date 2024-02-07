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
      if (action.payload === 'all') {
        if (state[0].checked === true) {
          return state.map((filterName) =>
            filterName.checked !== true
              ? filterName
              : { ...filterName, checked: !filterName.checked },
          )
          // eslint-disable-next-line no-else-return
        } else {
          return state.map((filterName) =>
            filterName.checked === true
              ? filterName
              : { ...filterName, checked: !filterName.checked },
          )
        }
      }

      const newState = state.map((filterName) =>
        filterName.filter === action.payload
          ? { ...filterName, checked: !filterName.checked }
          : filterName,
      )

      if (!newState.every((el) => el.checked)) {
        newState[0] = { ...newState[0], checked: false }
      }

      if (newState.slice(1).every((el) => el.checked)) {
        newState[0] = { ...newState[0], checked: true }
      }

      return newState
    },
  },
})

const filterTicketsReducer = filterTransfers.reducer
export default filterTicketsReducer

const { setFilterCheckbox } = filterTransfers.actions

export { setFilterCheckbox }
