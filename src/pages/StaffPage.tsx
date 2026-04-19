import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/ui/Container'
import { StaffCard } from '../components/staff/StaffCard'
import { staff } from '../data/staff'
import styles from './StaffPage.module.css'

export function StaffPage() {
  return (
    <>
      <PageHeader
        eyebrow="הנהגה"
        title="רבני הישיבה"
        lead="צוות שמוביל בדוגמה אישית — בשיעור, ביחס לתלמיד, ובדרך ההתבוננות על היום־יום."
      />
      <section className="page-section page-section--cream">
        <Container>
          <div className={styles.grid}>
            {staff.map((s) => (
              <StaffCard key={s.id} {...s} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
