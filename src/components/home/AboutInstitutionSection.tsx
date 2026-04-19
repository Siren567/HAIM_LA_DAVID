import { Container } from '../ui/Container'
import styles from './AboutInstitutionSection.module.css'

const PARAGRAPHS: { id: string; text: string }[] = [
  {
    id: 'intro',
    text: 'הרב ישי פרי הוא רב ישיבת החיים לדוד בחיפה, בה חיים ולומדים כ- 70 תלמידים. בנוסף, תחת ידיו של הרב הוקמו גני ילדים לחינוך יהודי לגיל הרך, כולל ובו כ- 50 אברכים, בתי כנסיות וכן עמותת עזרה חמה המספקת מדי חודש כ- 9,000 מנות לנזקקים וסלי מזון בחגים.',
  },
  {
    id: 'chesed',
    text: 'הרב פרי נוהג לשלב את פעילות החסד והנתינה כחלק מהתוכן החינוכי אשר הוא מקנה לתלמידי המוסדות. בנוסף, המוסדות עצמם קולטים נוער בסיכון ומשמשים להם בית חם וערכי.',
  },
  {
    id: 'alumni',
    text: 'רבים מבוגרי המוסדות החינוכיים של הרב פרי, התמנו לרבני קהילות וממשיכים את דרך החיזוק הקהילתי, קירוב הרחוקים, והערבות ההדדית.',
  },
  {
    id: 'torah',
    text: 'נוסף על הפעילות המוסדית ומפעלי החסד, הרב פרי מקיים שיעורי תורה קבועים ודרשות ברחבי הארץ בנושאים שונים: סוגיות שבין אדם לחברו, אחדות עם ישראל, אהבת הארץ, משמעותם של חגי ישראל ועוד.',
  },
]

export function AboutInstitutionSection() {
  return (
    <section className={styles.section} aria-labelledby="about-institution-heading">
      <Container>
        <div className={styles.layout}>
          <div className={styles.card}>
            <div className={styles.topAccent} aria-hidden />
            <div className={styles.parchment} aria-hidden />
            <div className={styles.pattern} aria-hidden />

            <span className={`${styles.quoteMark} ${styles.quoteMarkTop}`} aria-hidden>
              ״
            </span>
            <span className={`${styles.quoteMark} ${styles.quoteMarkBottom}`} aria-hidden>
              ״
            </span>

            <div className={styles.inner}>
              <div className={styles.headerBlock}>
                <h2 id="about-institution-heading" className={styles.title}>
                  אודות המוסד
                </h2>
                <div className={styles.titleOrnament} aria-hidden>
                  <svg viewBox="0 0 160 12" fill="none" className={styles.titleOrnamentSvg}>
                    <path
                      d="M4 6h64M92 6h64"
                      stroke="currentColor"
                      strokeWidth="0.85"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                    <path
                      d="M78 2.5l6 3.5-6 3.5-6-3.5 6-3.5z"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      fill="currentColor"
                      fillOpacity="0.15"
                    />
                  </svg>
                </div>
              </div>

              <div className={styles.body}>
                {PARAGRAPHS.map(({ id, text }) => (
                  <p key={id} className={styles.paragraph}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
