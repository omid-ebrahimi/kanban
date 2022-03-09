import React from 'react'
import styles from './CardField.module.css'

interface Props {
  name: string
  checked: boolean
  toggle: () => void
}

function CardField({ name, checked, toggle }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <input className={styles.checkbox} type="checkbox" name={name} checked={checked} onClick={toggle} />
      <label form={name} onClick={toggle}>{name}</label>
    </div>
  )
}

export default CardField
