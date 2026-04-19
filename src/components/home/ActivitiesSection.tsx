import { Link } from 'react-router-dom'
import { ActivityCard } from '../activities/ActivityCard'
import { yeshivaActivities } from '../../data/activities'
import styles from './ActivitiesSection.module.css'

const FEATURED_COUNT = 4

export function ActivitiesSection() {
  const featured = yeshivaActivities.slice(0, FEATURED_COUNT)

  return (
    <section
      id="yeshiva-activities"
      className={styles.section}
      aria-labelledby="activities-heading"
    >
      <div className={styles.frame}>
        <h2 id="activities-heading" className={styles.heading}>
          פעילות המוסדות
        </h2>
        <p className={styles.intro}>
          מוסדות &quot;החיים לדוד&quot; פועלים לחיזוק חיי התורה, החינוך והקהילה — מבט על מיזמים מרכזיים
          שמעצבים את חיי הקהילה והישיבה.
        </p>

        <ul className={styles.mosaic}>
          {featured.map((item, index) => (
            <li key={item.id} className={styles.mosaicItem} data-index={index}>
              <ActivityCard item={item} variant="showcase" />
            </li>
          ))}
        </ul>

        <div className={styles.ctaWrap}>
          <Link to="/activities" className={styles.cta}>
            <span className={styles.ctaLabel}>לכל פעילויות הישיבה</span>
            <span className={styles.ctaArrow} aria-hidden>
              ←
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
