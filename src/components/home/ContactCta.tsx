import { ButtonLink } from '../ui/ButtonLink'
import { Container } from '../ui/Container'
import styles from './ContactCta.module.css'

export function ContactCta() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.copy}>
            <h2 className={styles.title}>רוצים לשמוע עוד — בלי לחץ?</h2>
            <p className={styles.text}>
              נשמח לתאם שיחה קצרה, סיור במתחם, או מענה לשאלות על מסלול הלימודים המתאים.
            </p>
          </div>
          <div className={styles.actions}>
            <ButtonLink to="/contact" variant="primary">
              צור קשר
            </ButtonLink>
            <ButtonLink to="/programs" variant="ghost">
              סקירת מסלולים
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
