import { Link, Navigate, useParams } from 'react-router-dom'
import { getActivityById } from '../data/activities'
import { buildActivityGalleryItems } from '../data/activityDetailGallery'
import { Container } from '../components/ui/Container'
import { ButtonLink } from '../components/ui/ButtonLink'
import { GalleryMasonry } from '../components/gallery/GalleryMasonry'
import styles from './ActivityDetailPage.module.css'

export function ActivityDetailPage() {
  const { activityId } = useParams()
  const activity = activityId ? getActivityById(activityId) : undefined

  if (!activity) {
    return <Navigate to="/activities" replace />
  }

  const galleryItems = buildActivityGalleryItems(activity.id)

  return (
    <>
      <header className={styles.hero} aria-labelledby="activity-detail-title">
        <Container className={styles.heroInner}>
          <nav className={styles.heroNav} aria-label="מסלול ניווט">
            <Link to="/activities" className={styles.heroNavLink}>
              פעילויות המוסדות
            </Link>
          </nav>
          <p className={styles.heroEyebrow}>פעילות</p>
          <h1 id="activity-detail-title" className={styles.heroTitle}>
            {activity.title}
          </h1>
          <div className={styles.heroDivider} aria-hidden>
            <svg className={styles.heroOrnament} viewBox="0 0 200 14" fill="none">
              <path
                d="M8 7h78M114 7h78"
                stroke="currentColor"
                strokeWidth="0.9"
                strokeLinecap="round"
                opacity="0.75"
              />
              <path
                d="M96 3l8 4-8 4-8-4 8-4z"
                stroke="currentColor"
                strokeWidth="0.55"
                fill="currentColor"
                fillOpacity="0.12"
              />
            </svg>
          </div>
          <p className={styles.heroLead}>{activity.description}</p>
        </Container>
      </header>

      <section className={styles.contentSection} aria-label="תוכן הפעילות">
        <Container narrow>
          <div className={`page-prose ${styles.prose}`}>
            {activity.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h2 className={styles.galleryTitle}>תמונות מהפעילות</h2>
          <p className={styles.galleryIntro}>רגעים מהשטח — התמונות יתעדכנו בהמשך.</p>
          <div className={styles.galleryWrap}>
            <GalleryMasonry items={galleryItems} interactive={false} />
          </div>

          <div className={styles.actions}>
            <ButtonLink to="/activities" variant="goldOutline">
              חזרה לכל הפעילויות
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
