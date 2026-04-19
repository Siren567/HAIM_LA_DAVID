import styles from './SiteLogo.module.css'

const LOGO_SRC = '/logo-hachaim-ldavid.webp'

type Props = {
  variant?: 'default' | 'dark'
  className?: string
}

export function SiteLogo({ variant = 'default', className = '' }: Props) {
  return (
    <div
      className={`${styles.lockup} ${variant === 'dark' ? styles.dark : ''} ${className}`.trim()}
    >
      <div className={styles.mark}>
        <img
          src={LOGO_SRC}
          alt='מוסדות התורה "החיים לדוד"'
          className={styles.logoImg}
          width={1920}
          height={1872}
          decoding="async"
        />
      </div>
      <span className={styles.byline}>בהובלת הרב פרי שליט״א</span>
    </div>
  )
}
