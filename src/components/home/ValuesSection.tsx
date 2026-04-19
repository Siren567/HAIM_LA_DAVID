import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './ValuesSection.module.css'

const items = [
  {
    title: 'דיוק תורני',
    text: 'שיעורים שמכבדים את הטקסט: קצב נכון, הבהרות, והתמדה בלי להסתערות.',
  },
  {
    title: 'אווירה רגועה',
    text: 'מרחב שמזמין ריכוז: אור רך, שקט יחסי, ויחס אישי שמרגיש יקר.',
  },
  {
    title: 'חיים של כבוד',
    text: 'מסגרת שמדברת בשפה של בינה: בגבולות ברורים ובלב פתוח.',
  },
]

export function ValuesSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="חזון"
          title="ערכים שמלווים את היום־יום"
          subtitle="לא עוד רעש של מוסדות — אלא שפה אחידה של כבוד, עומק והתאמה אנושית."
        />
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <span className={styles.accent} aria-hidden />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
