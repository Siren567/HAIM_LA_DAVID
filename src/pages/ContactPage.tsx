import { useState, type FormEvent } from 'react'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import styles from './ContactPage.module.css'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="קשר"
        title="צור קשר"
        lead="משאירים פרטים — ונחזור עם מענה אנושי, לא אוטומטי."
      />
      <section className="page-section page-section--cream">
        <Container narrow>
          <div className={styles.layout}>
            <div className={styles.info}>
              <h2 className={styles.infoTitle}>פרטי המוסד</h2>
              <p className={styles.line}>כתובת: רחוב התורה 12, ירושלים</p>
              <p className={styles.line}>טלפון: 02-500-1234</p>
              <p className={styles.line}>אימייל: info@haimladavid.org.il</p>
              <p className={styles.note}>
                שעות קבלה טלפונית: ימים א׳–ה׳ בין 09:00–13:00 ו־16:00–19:00.
              </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              {sent ? (
                <p className={styles.success} role="status">
                  תודה — הקיבלנו את הפנייה. נחזור אליך בהקדם.
                </p>
              ) : null}
              <label className={styles.field}>
                <span className={styles.label}>שם מלא</span>
                <input className={styles.input} name="name" required autoComplete="name" />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>טלפון</span>
                <input className={styles.input} name="phone" type="tel" autoComplete="tel" />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>אימייל</span>
                <input className={styles.input} name="email" type="email" autoComplete="email" />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>הודעה</span>
                <textarea className={styles.textarea} name="message" rows={5} />
              </label>
              <Button variant="primary" type="submit" className={styles.submit}>
                שליחה
              </Button>
              <p className={styles.hint}>טופס זה להדגמה בלבד — חיבור לשרת יתווסף בהמשך.</p>
            </form>
          </div>
        </Container>
      </section>
    </>
  )
}
