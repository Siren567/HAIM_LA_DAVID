import { Container } from '../ui/Container'
import { ButtonLink } from '../ui/ButtonLink'
import styles from './IntroSection.module.css'

export function IntroSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>היכרות קצרה</p>
            <h2 className={styles.title}>ישיבה שמרגישה כמו בית — עם סטנדרט של מוסד יוקרתי</h2>
            <p className={styles.text}>
              ב״חיים לאדוד״ אנחנו מאמינים שהלימוד צריך להיות מדויק, חם ומכובד. המבנה הארגוני, שעות
              היום והיחס האישי נבנים כך שכל תלמיד יוכל לצמוח בקצב נכון — בלי לחץ מיותר, ובהרבה כבוד
              הדדי.
            </p>
            <p className={styles.text}>
              המוסד ממוקם בלב שכונה שקטה בירושלים, עם אולמות לימוד מרווחים, ספרייה עשירה וחצרות
              שמזמינות שיחה אמיתית אחרי השיעור.
            </p>
            <ButtonLink to="/about" variant="goldOutline">
              לסיפור המוסד
            </ButtonLink>
          </div>
          <div className={styles.visual}>
            <div className={styles.frame}>
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80"
                alt=""
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.badge}>
                <span className={styles.badgeTitle}>שיעור כולל</span>
                <span className={styles.badgeSub}>דיוק · עומק · התמדה</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
