import { useState, type FormEvent } from 'react'
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL_DISPLAY,
  CONTACT_EMAIL_HREF,
  CONTACT_HOURS,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from '../data/contact'
import { SocialIcons } from '../components/layout/SocialIcons'
import styles from './ContactPage.module.css'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className={styles.page} aria-labelledby="contact-page-title" dir="rtl">
      <div className={styles.shell}>
        <header className={styles.pageHeader}>
          <p className={styles.overline}>קשר</p>
          <h1 id="contact-page-title" className={styles.pageTitle}>
            צור קשר
          </h1>
          <div className={styles.titleDivider} aria-hidden>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDiamond} />
            <span className={styles.dividerLine} />
          </div>
          <p className={styles.pageSubtitle}>
            נשמח לשמוע מכם — השאירו הודעה או צרו קשר בדרכים המופיעות להלן.
          </p>
        </header>

        <div className={styles.mainGrid}>
          <aside className={styles.infoPanel} aria-label="פרטי התקשרות">
            <section className={styles.infoBlock}>
              <h2 className={styles.infoHeading}>פרטי התקשרות</h2>
              <p className={styles.infoLine}>
                <a href={CONTACT_PHONE_TEL} className={styles.infoLink}>
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </p>
              <p className={styles.infoLine}>
                <a href={CONTACT_EMAIL_HREF} className={styles.infoLink}>
                  {CONTACT_EMAIL_DISPLAY}
                </a>
              </p>
            </section>

            <section className={styles.infoBlock}>
              <h2 className={styles.infoHeading}>כתובת</h2>
              <p className={styles.infoText}>{CONTACT_ADDRESS}</p>
            </section>

            <section className={styles.infoBlock}>
              <h2 className={styles.infoHeading}>שעות פעילות</h2>
              <p className={styles.infoText}>{CONTACT_HOURS}</p>
            </section>

            <div className={styles.socialBlock}>
              <p className={styles.socialHeading}>עקבו אחרינו</p>
              <SocialIcons variant="light" />
            </div>
          </aside>

          <div className={styles.cardBlock}>
            <div className={styles.ambientBlur} aria-hidden />
            <div className={styles.card}>
              <form className={styles.form} onSubmit={handleSubmit}>
                {sent ? (
                  <p className={styles.success} role="status">
                    תודה — הקיבלנו את הפנייה. נחזור אליך בהקדם.
                  </p>
                ) : null}

                <label className={styles.field}>
                  <span className={styles.label}>שם מלא</span>
                  <input
                    className={styles.input}
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="ישראל ישראלי"
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>טלפון</span>
                  <input
                    className={styles.input}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="052-9876543"
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>אימייל</span>
                  <input
                    className={styles.input}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="israel.yisraeli@email.co.il"
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>הודעה</span>
                  <textarea
                    className={styles.textarea}
                    name="message"
                    rows={5}
                    placeholder="שלום, אשמח לקבל פרטים נוספים על שעות הפעילות ואפשרות לבקר בישיבה."
                  />
                </label>

                <button type="submit" className={styles.submit}>
                  שליחה
                </button>

                <p className={styles.hint}>
                  טופס זה להדגמה בלבד — חיבור לשרת יתווסף בהמשך.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
