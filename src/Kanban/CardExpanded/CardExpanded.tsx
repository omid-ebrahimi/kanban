import React from 'react'
import { Modal } from '../../components'
import { CardFieldsType, CardType, ColumnType } from '../Kanban.types'
import styles from './CardExpanded.module.css'
import Attachment from './Attachment'

interface Props {
  card: CardType
  columns: ColumnType[]
  onChangeColumn: (name: string) => void
  visibleFields: CardFieldsType
  close: () => void
}

function CardExpanded({ card, columns, onChangeColumn, visibleFields, close }: Props): JSX.Element {
  const { title, attachment, publishDate, description, columnName } = card
  return (
    <Modal hide={close}>
      <div className={styles.container}>
        <h1>{visibleFields.title && title}</h1>
        <label form="column">Column Name: </label>
        <select name="column" value={columnName} onChange={(e) => onChangeColumn(e.target.value)}>
          {columns.map(({ name }) => <option key={name} value={name}>{name}</option>)}
        </select>
        <p>{visibleFields.description && description}</p>
        {visibleFields.attachment && attachment && <Attachment attachment={attachment} />}
        <p>
          {visibleFields.publishDate && <h5>Publish Date: {publishDate}</h5>}
        </p>
      </div>
    </Modal>
  )
}

export default CardExpanded
