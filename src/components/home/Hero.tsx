import { ButtonLink } from '../ui/ButtonLink'
import { Container } from '../ui/Container'
import styles from './Hero.module.css'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=2000&q=85&auto=format&fit=crop'

export function Hero() {
  return (
    <section className={styles.hero} aria-label="מבוא">
      <div className={styles.bg}>
        <img src={HERO_IMAGE} alt="" className={styles.bgImage} loading="eager" />
        <div className={styles.bgOverlay} />
        <div className={styles.bgGrain} aria-hidden />
      </div>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>ישיבה תורנית · ירושלים</p>
          <h1 className={styles.title}>תורה שמעלה · חיים שמרוממים</h1>
          <p className={styles.lead}>
            מוסד שמזמין את התלמיד לעומק הלימוד, לדיוק בחיים, ולרוח של ענווה ויוקרה רוחנית — בלי
            רעש, ובגובה הציפיות.
          </p>
          <div className={styles.ctas}>
            <ButtonLink to="/programs" variant="primary">
              מסלולי לימוד
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              קביעת שיחה
            </ButtonLink>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>40+</span>
              <span className={styles.statLabel}>שנות מסורת</span>
            </div>
            <div className={styles.statDivider} aria-hidden />
            <div className={styles.stat}>
              <span className={styles.statNum}>120</span>
              <span className={styles.statLabel}>תלמידים במתחם</span>
            </div>
            <div className={styles.statDivider} aria-hidden />
            <div className={styles.stat}>
              <span className={styles.statNum}>6</span>
              <span className={styles.statLabel}>שיעורי כולל</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
