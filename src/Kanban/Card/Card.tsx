import React from 'react'
import { CardFieldsType, CardType } from '../Kanban.types'
import styles from './Card.module.css'

interface Props {
  card: CardType
  visibleFields: CardFieldsType
  onClick: () => void
}

function Card({ card, visibleFields, onClick }: Props): JSX.Element {
  const { title, attachment, publishDate } = card
  return (
    <div className={styles.container} onClick={onClick}>
      <p className={styles.title}>{visibleFields.title && title}</p>
      <div className={styles.footer}>
        <p>{visibleFields.attachment && attachment ? '📎' : ''}</p>
        <p>{visibleFields.publishDate && publishDate}</p>
      </div>
    </div>
  )
}

export default Card
