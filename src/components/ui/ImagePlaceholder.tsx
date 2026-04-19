import styles from './ImagePlaceholder.module.css'

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 1.5l2.8 6.9h7.4l-6 4.5 2.3 7.1L12 17.3 5.5 19.9l2.3-7.1-6-4.5h7.4L12 1.5z" />
    </svg>
  )
}

type Props = {
  /** ברירת מחדל כמו בעיצוב המקורי */
  label?: string
  className?: string
  /** עגלה / תמונות קטנות */
  compact?: boolean
}

export function ImagePlaceholder({
  label = 'עוד רגעים מהמוסד',
  className = '',
  compact = false,
}: Props) {
  return (
    <div
      className={`${styles.root} ${compact ? styles.compact : ''} ${className}`.trim()}
      role="img"
      aria-label={label}
    >
      <StarIcon className={styles.star} />
      <p className={styles.text}>{label}</p>
    </div>
  )
}
