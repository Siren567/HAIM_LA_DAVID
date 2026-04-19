import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/ui/Container'
import styles from './ProgramsPage.module.css'

const tracks = [
  {
    title: 'שיעור א׳ — מסלול מיוחד',
    text: 'הדגש על יסודות עמוקים בגמרא, עם חיבור הדוק לראשונים. מתאים למי שמחפש קצב יציב וליווי צמוד.',
  },
  {
    title: 'שיעור ב׳ — קצב בינוני־מהיר',
    text: 'שילוב של רוחב ועומק: הרחבות נקודתיות, חזרות מסודרות, ושיעורי עיון שמפתחים עצמאות.',
  },
  {
    title: 'כולל — עומק ודיוק',
    text: 'לימוד ממושך עם דגש על חידושי סוגיות, כתיבת חידושים קצרים, ושיח עם ראשי הישיבה.',
  },
]

export function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="לימודים"
        title="מסלולי לימוד"
        lead="מסלולים שונים — אותה שפה של כבוד. בוחרים לפי רמת קודם, קצב, ויעדים אישיים."
      />
      <section className="page-section">
        <Container>
          <div className={styles.grid}>
            {tracks.map((t) => (
              <article key={t.title} className={styles.card}>
                <h2 className={styles.title}>{t.title}</h2>
                <p className={styles.text}>{t.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
