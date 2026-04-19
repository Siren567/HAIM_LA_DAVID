import { Link, type LinkProps } from 'react-router-dom'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'ghost' | 'goldOutline'

export function ButtonLink({
  children,
  variant = 'primary',
  className = '',
  ...props
}: LinkProps & { variant?: Variant }) {
  const v =
    variant === 'primary'
      ? styles.primary
      : variant === 'secondary'
        ? styles.secondary
        : variant === 'ghost'
          ? styles.ghost
          : styles.goldOutline

  return (
    <Link className={`${styles.btn} ${v} ${className}`.trim()} {...props}>
      {children}
    </Link>
  )
}
