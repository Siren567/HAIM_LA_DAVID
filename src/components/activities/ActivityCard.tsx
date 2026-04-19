import { Link } from 'react-router-dom'
import type { ActivityItem } from '../../data/activities'
import styles from './ActivityCard.module.css'

export type ActivityCardVariant = 'compact' | 'preview' | 'showcase'

type Props = {
  item: ActivityItem
  variant?: ActivityCardVariant
}

export function ActivityCard({ item, variant = 'preview' }: Props) {
  if (variant === 'showcase') {
    return (
      <article className={styles.cardShowcase}>
        <div className={styles.showcaseImageWrap}>
          <img
            src={item.image}
            alt=""
            className={styles.showcaseImage}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.showcaseGoldLine} aria-hidden />
        <div className={styles.showcaseBody}>
          <h3 className={styles.showcaseTitle}>{item.title}</h3>
          <div className={styles.showcaseDivider} aria-hidden />
          <p className={styles.showcaseDesc}>{item.preview}</p>
        </div>
      </article>
    )
  }

  return (
    <article className={styles.previewArticle}>
      <Link
        to={`/activities/${item.id}`}
        className={styles.cardPreview}
        aria-label={`${item.title} — מידע נוסף`}
      >
        <div className={styles.previewImageWrap}>
          <img
            src={item.image}
            alt=""
            className={styles.previewImage}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.previewBody}>
          <h3 className={styles.previewTitle}>{item.title}</h3>
          <p className={styles.previewSummary}>{item.preview}</p>
          <span className={styles.previewCta}>
            <span>מידע נוסף</span>
            <span className={styles.ctaArrow} aria-hidden>
              ←
            </span>
          </span>
        </div>
      </Link>
    </article>
  )
}
