import React, { useState } from 'react'
import { initialCards, initialColumns, initialCardFields } from './initialData'
import styles from './Kanban.module.css'
import Column from './Column'
import CardSettings from './CardSettings/CardSettings'
import { CardFieldsType, CardType } from './Kanban.types'
import CardExpanded from './CardExpanded'
import AddColumn from './AddColumn'
import { getRandomLightColor } from '../utils'

function Kanban(): JSX.Element {
  const [cards, setCards] = useState(initialCards)
  const [columns, setColumns] = useState(initialColumns)
  const [cardFields, setCardFields] = useState(initialCardFields)
  const [showCardSettings, setShowCardSettings] = useState(false)
  const [expandedCard, setExpandedCard] = useState<CardType>()

  function toggleCardField(field: keyof CardFieldsType) {
    setCardFields(fields => ({ ...fields, [field]: !fields[field] }))
  }

  function addColumn(name: string) {
    if (columns.some(column => column.name === name)) {
      return alert('Column already exists')
    }
    setColumns(prevColumns => [...prevColumns, { name, color: getRandomLightColor() }])
  }

  function moveCard(columnName: string) {
    setCards(prevCards => prevCards.map(card => card.id === expandedCard?.id ? { ...card, columnName } : card))
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.settingsButton} onClick={() => setShowCardSettings(true)}>
          <span className={styles.settingsIcon}>⚙</span> Card Settings
        </button>
        <AddColumn addColumn={addColumn} />
      </div>
      <div className={styles.board}>
        {columns.map(column =>
          <Column
            key={column.name}
            column={column}
            cards={cards.filter(card => card.columnName === column.name)}
            visibleCardFields={cardFields}
            onCardClick={setExpandedCard}
          />)
        }
      </div>
      {showCardSettings &&
        <CardSettings
          cardFields={cardFields}
          toggleCardField={toggleCardField}
          close={() => setShowCardSettings(false)}
        />}
      {expandedCard &&
        <CardExpanded
          card={expandedCard}
          columns={columns}
          onChangeColumn={moveCard}
          visibleFields={cardFields}
          close={() => setExpandedCard(undefined)}
        />}
    </div>
  )
}

export default Kanban
