import styles from './Hero.module.css'

const HERO_IMAGE = '/hero-beit-midrash.jpg'

export function Hero() {
  return (
    <section className={styles.hero} aria-label="מבוא" dir="rtl">
      <div className={styles.bg}>
        <img
          src={HERO_IMAGE}
          alt="תלמידים בבית המדרש"
          className={styles.bgImage}
          loading="eager"
        />
        <div className={styles.bgGradient} aria-hidden />
      </div>

      <div className={styles.shell}>
        <div className={styles.content}>
          <p className={styles.label}>ישיבה תורנית</p>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>בית מדרש של תורה</span>
            <span className={styles.titleLine}>ודורות</span>
          </h1>
          <div className={styles.titleDivider} aria-hidden />
          <p className={styles.lead}>לימוד מדויק וקהילה חמה — במקום שמרגיש כמו בית.</p>
          <a href="#yeshiva-activities" className={styles.cta}>
            לפעילות הישיבה
            <span className={styles.ctaArrow} aria-hidden>
              ←
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
