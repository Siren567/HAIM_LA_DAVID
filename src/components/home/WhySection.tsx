import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './WhySection.module.css'

const points = [
  'ליווי רוחני עקבי — לא רק “שיעור ושחרור”.',
  'מבנה יום שמכבד גם את הלימוד וגם את המנוחה.',
  'ספרייה עשירה וחדרים שקטים לעיון אישי.',
  'קהילת תלמידים שמחפשת רצינות בלי תחרותיות מיותרת.',
]

export function WhySection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <SectionHeading
              align="start"
              eyebrow="למה כאן"
              title="למה לבחור דווקא ב״חיים לאדוד״"
              subtitle="כי אנחנו מאמינים שיוקרה אמיתית נמדדת בשקט: בדיוק, בהתמדה, ובדרך שבה מדברים אחד עם השני."
            />
            <ul className={styles.list}>
              {points.map((p) => (
                <li key={p} className={styles.item}>
                  <span className={styles.dot} aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.panel}>
            <p className={styles.quote}>
              “כשהכול מסודר בפנים — גם הלימוד נפתח. כאן למדתי לא רק סוגיות, אלא גם איך לחיות
              בנחת.”
            </p>
            <p className={styles.attrib}>תלמיד כולל, תשפ״ה</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
