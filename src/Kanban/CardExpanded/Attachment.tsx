import React from 'react'
import { AttachmentType } from '../Kanban.types'
import styles from './CardExpanded.module.css'

interface Props {
  attachment: AttachmentType
}

function Attachment({ attachment }: Props): JSX.Element {
  const { title, url } = attachment
  return (
    <>
      <h3>Attachment</h3>
      <p>
        <span>
          📎
          <a className={styles.attachmentLink} href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </span>
      </p>
    </>
  )
}

export default Attachment
