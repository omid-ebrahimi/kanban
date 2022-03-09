import React from 'react'
import Modal from '../../components/Modal/Modal'
import { CardFieldsType } from '../Kanban.types'
import styles from './CardSettings.module.css'
import CardField from './CardField/CardField'

interface Props {
  cardFields: CardFieldsType
  toggleCardField: (field: keyof CardFieldsType) => void
  close: () => void
}

function CardSettings({ close, cardFields, toggleCardField }: Props): JSX.Element {
  return (
    <Modal hide={close}>
      <div className={styles.container}>
        <h1>Card Fields</h1>
        {Object.keys(cardFields).map((field) =>
          <CardField
            key={field}
            name={field}
            checked={cardFields[field as keyof CardFieldsType]}
            toggle={() => toggleCardField(field as keyof CardFieldsType)}
          />
        )}
      </div>
    </Modal>
  )
}

export default CardSettings
