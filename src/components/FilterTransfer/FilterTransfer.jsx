/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import cl from './FilterTransfer.module.scss'

export default function FilterTransfer() {
  return (
    <div className={cl.containerTransfer}>
      <h3>Количество пересадок</h3>
      <label>
        <input type="checkbox" />
        Все
      </label>
      <label>
        <input type="checkbox" />
        Без пересадок
      </label>
      <label>
        <input type="checkbox" />1 пересадка
      </label>
      <label>
        <input type="checkbox" />2 пересадка
      </label>
      <label>
        <input type="checkbox" />3 пересадка
      </label>
    </div>
  )
}
