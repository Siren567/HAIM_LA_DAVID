import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  /** Extra class on the panel (for width/height overrides) */
  panelClassName?: string
  /** Light cream/navy styling (site palette) vs default dark panel */
  variant?: 'default' | 'light'
  /** If false, clicking the backdrop does not close (default true) */
  closeOnBackdrop?: boolean
  /** Accessible name for the dialog */
  ariaLabel?: string
}

export function Modal({
  isOpen,
  onClose,
  children,
  panelClassName = '',
  variant = 'default',
  closeOnBackdrop = true,
  ariaLabel,
}: Props) {
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const light = variant === 'light'

  return createPortal(
    <div
      className={`${styles.overlay} ${light ? styles.overlayLight : ''}`.trim()}
      role="presentation"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div
        className={`${styles.panel} ${light ? styles.panelLight : ''} ${panelClassName}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={`${styles.closeBtn} ${light ? styles.closeBtnLight : ''}`.trim()}
          onClick={onClose}
          aria-label="סגור"
        >
          <span className={styles.closeIcon} aria-hidden>
            ×
          </span>
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
