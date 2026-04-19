import { ActivityCard } from '../components/activities/ActivityCard'
import { Container } from '../components/ui/Container'
import { yeshivaActivities } from '../data/activities'
import styles from './ActivitiesPage.module.css'

export function ActivitiesPage() {
  return (
    <>
      <header className={styles.hero} aria-labelledby="activities-page-title">
        <Container className={styles.heroInner}>
          <p className={styles.heroEyebrow}>המוסד</p>
          <h1 id="activities-page-title" className={styles.heroTitle}>
            פעילות המוסדות
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
          <p className={styles.heroLead}>
            מוסדות &quot;החיים לדוד&quot; פועלים לחיזוק חיי התורה, החינוך והקהילה באזור, בהובלתו הרוחנית
            והחינוכית של הרב ישי פרי. פעילות המוסדות מושתתת על מחויבות עמוקה לעיצוב חיי רוח ערכיים,
            לבניית קהילה מלוכדת ולתמיכה בהתפתחותם של בני נוער ומבוגרים כאחד.
          </p>
        </Container>
      </header>

      <section className={styles.listSection} aria-label="רשימת פעילויות">
        <Container>
          <ul className={styles.grid}>
            {yeshivaActivities.map((item) => (
              <li key={item.id} className={styles.gridItem}>
                <ActivityCard item={item} variant="preview" />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
