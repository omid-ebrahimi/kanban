import React from 'react'
import Card from '../Card'
import { CardFieldsType, CardType, ColumnType } from '../Kanban.types'
import styles from './Column.module.css'

interface Props {
  column: ColumnType
  cards: CardType[]
  visibleCardFields: CardFieldsType
  onCardClick: (card: CardType) => void
}

function Column({ column, cards, visibleCardFields, onCardClick }: Props): JSX.Element {
  return (
    <div className={styles.container} style={{ backgroundColor: column.color }}>
      <h3>{column.name}</h3>
      {cards.map(card =>
        <Card key={card.id} card={card} visibleFields={visibleCardFields} onClick={() => onCardClick(card)} />
      )}
    </div>
  )
}

export default Column
