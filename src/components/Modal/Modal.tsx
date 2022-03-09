import { createPortal } from 'react-dom'
import React, { PropsWithChildren } from 'react'
import styles from './Modal.module.css'

interface Props {
  hide: () => void
}

const portalElement = document.getElementById('portal') as HTMLElement

function Modal({ hide, children }: PropsWithChildren<Props>) {
  return createPortal(
    <div className={styles.container} onClick={hide}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    portalElement
  )
}

export default Modal
