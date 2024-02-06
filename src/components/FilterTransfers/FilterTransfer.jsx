import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterCheckbox } from '../../redux/slices/filterTransfers'
import cl from './FilterTransfer.module.scss'

export default function FilterTransfer() {
  const dispatch = useDispatch()
  const stateCheckbox = useSelector((state) => state.filterTransfers)

  function handleFilterCheckbox(name) {
    dispatch(setFilterCheckbox(name))
  }

  const input = [
    { name: 'all', label: 'Все' },
    { name: 'noTransfers', label: 'Без пересадок' },
    { name: 'oneTransfers', label: '1 пересадка' },
    { name: 'twoTransfers', label: '2 пересадкие' },
    { name: 'threeTransfers', label: '3 пересадки' },
  ]

  return (
    <div className={cl['container-transfer']}>
      <h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      {input.map(({ name, label }, i) => {
        return (
          <label htmlFor={name} key={name}>
            {' '}
            <input
              type="checkbox"
              id={name}
              checked={stateCheckbox[i].filter === name ? stateCheckbox[i].checked : false}
              onChange={() => handleFilterCheckbox(name)}
            />
            {label}
          </label>
        )
      })}
    </div>
  )
}
