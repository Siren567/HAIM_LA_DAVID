import type { ReactNode } from 'react'
import styles from './Container.module.css'

export function Container({
  children,
  className = '',
  narrow,
}: {
  children: ReactNode
  className?: string
  narrow?: boolean
}) {
  return (
    <div
      className={`${styles.container}${narrow ? ` ${styles.narrow}` : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
