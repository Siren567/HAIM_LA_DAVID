import { Link } from 'react-router-dom'
import { staff } from '../../data/staff'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ButtonLink } from '../ui/ButtonLink'
import { StaffCard } from '../staff/StaffCard'
import styles from './StaffPreview.module.css'

export function StaffPreview() {
  const preview = staff.slice(0, 3)

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <SectionHeading
            align="start"
            eyebrow="הנהגה רוחנית"
            title="רבני הישיבה"
            subtitle="אנשי תורה שמובילים בדוגמה אישית — בשיעור, בחדר, ובשיחת רחוב קצרה."
          />
          <ButtonLink to="/staff" variant="secondary" className={styles.headBtn}>
            לכל הרבנים
          </ButtonLink>
        </div>
        <div className={styles.grid}>
          {preview.map((s) => (
            <StaffCard key={s.id} {...s} />
          ))}
        </div>
        <p className={styles.mobileLink}>
          <Link to="/staff">לכל הרבנים ←</Link>
        </p>
      </Container>
    </section>
  )
}
