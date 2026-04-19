import styles from './SectionHeading.module.css'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'start' | 'center'
  light?: boolean
}) {
  return (
    <header
      className={`${styles.wrap} ${align === 'center' ? styles.center : styles.start} ${light ? styles.light : ''}`}
    >
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2 className={styles.title}>{title}</h2>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </header>
  )
}

export function SectionDivider() {
  return <div className={styles.divider} aria-hidden />
}
