import React, { useState } from 'react'
import styles from './AddColumn.module.css'

interface Props {
  addColumn: (name: string) => void
}

function AddColumn({ addColumn }: Props): JSX.Element {
  const [name, setName] = useState('')

  function onAddClick() {
    addColumn(name)
    setName('')
  }

  return (
    <div className={styles.container}>
      <label className={styles.label} form="column">New Column: </label>
      <input className={styles.input} name="column" type="text" value={name} placeholder="Column name" onChange={(e) => setName(e.target.value)} />
      <button className={styles.button} onClick={onAddClick}>+</button>
    </div>
  )
}

export default AddColumn
