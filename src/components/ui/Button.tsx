import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'ghost' | 'goldOutline'

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: Variant
}) {
  const v =
    variant === 'primary'
      ? styles.primary
      : variant === 'secondary'
        ? styles.secondary
        : variant === 'ghost'
          ? styles.ghost
          : styles.goldOutline

  return (
    <button type="button" className={`${styles.btn} ${v} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}
