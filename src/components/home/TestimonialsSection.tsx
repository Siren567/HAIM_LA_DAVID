import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './TestimonialsSection.module.css'

const quotes = [
  {
    text: 'הרגשתי שהמוסד לא מנסה “להרשים ברעש”, אלא בדיוק. זה בדיוק מה שחיפשתי.',
    name: 'אבא של תלמיד כולל',
  },
  {
    text: 'השיעורים ברורים, והאווירה בבית הכולל מכבדת. יש כאן מקום לשאול בלי בושה.',
    name: 'תלמיד שיעור א׳',
  },
]

export function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="קולות מהשטח"
          title="מה אומרים עלינו"
          subtitle="מילים של הורים ותלמידים — קצרות, אמיתיות, ובלי יומרה."
        />
        <div className={styles.grid}>
          {quotes.map((q) => (
            <blockquote key={q.name} className={styles.card}>
              <p className={styles.text}>“{q.text}”</p>
              <footer className={styles.footer}>— {q.name}</footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  )
}
