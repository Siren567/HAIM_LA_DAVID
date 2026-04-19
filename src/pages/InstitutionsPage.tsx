import { Container } from '../components/ui/Container'
import { INSTITUTIONS_INTRO, INSTITUTION_SECTIONS } from '../data/institutions'
import styles from './InstitutionsPage.module.css'

export function InstitutionsPage() {
  return (
    <>
      <header className={styles.hero} aria-labelledby="institutions-page-title">
        <Container className={styles.heroInner}>
          <p className={styles.heroEyebrow}>המוסדות</p>
          <h1 id="institutions-page-title" className={styles.heroTitle}>
            מוסדות
          </h1>
          <div className={styles.heroDivider} aria-hidden>
            <svg className={styles.heroOrnament} viewBox="0 0 200 14" fill="none">
              <path
                d="M8 7h78M114 7h78"
                stroke="currentColor"
                strokeWidth="0.9"
                strokeLinecap="round"
                opacity="0.75"
              />
              <path
                d="M96 3l8 4-8 4-8-4 8-4z"
                stroke="currentColor"
                strokeWidth="0.55"
                fill="currentColor"
                fillOpacity="0.12"
              />
            </svg>
          </div>
          <p className={styles.heroLead}>
            ישיבה לצעירים, כולל אברכים ומוסדות לגיל הרך — תורה, חינוך וקהילה תחת הנהגת הרב ישי פרי שליט״א.
          </p>
        </Container>
      </header>

      <section className={styles.introSection} aria-label="הקדמה">
        <Container narrow>
          <div className={`page-prose ${styles.introProse}`}>
            {INSTITUTIONS_INTRO.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {INSTITUTION_SECTIONS.map((section, index) => (
        <section
          key={section.id}
          className={`${styles.featureSection} ${index % 2 === 1 ? styles.featureSectionAlt : ''}`}
          aria-labelledby={`inst-section-${section.id}`}
        >
          <Container>
            <div
              className={`${styles.featureRow} ${index % 2 === 0 ? styles.featureRowNormal : styles.featureRowFlip}`}
            >
              <div className={styles.featureText}>
                <h2 id={`inst-section-${section.id}`} className={styles.featureTitle}>
                  {section.title}
                </h2>
                <p className={styles.featureLead}>{section.lead}</p>
                {section.blocks.map((block) => (
                  <div key={block.subtitle} className={styles.block}>
                    <h3 className={styles.blockTitle}>{block.subtitle}</h3>
                    <p className={styles.blockBody}>{block.body}</p>
                  </div>
                ))}
              </div>
              <div className={styles.featureImageWrap}>
                <div className={styles.featureImageFrame}>
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className={styles.featureImage}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className={styles.featureImageEdge} aria-hidden />
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}
    </>
  )
}
