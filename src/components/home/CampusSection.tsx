import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './CampusSection.module.css'

const shots = [
  {
    src: 'https://images.unsplash.com/photo-1524990027879-84f36906d8fe?w=900&q=80',
    alt: '',
    caption: 'אולם לימוד מרווח',
  },
  {
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&q=80',
    alt: '',
    caption: 'ספרייה ועיון',
  },
  {
    src: 'https://images.unsplash.com/photo-1568667256543-885aa25bacb0?w=900&q=80',
    alt: '',
    caption: 'חצרות שקטות',
  },
]

export function CampusSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="קמפוס"
          title="אווירת למידה שמרגישה מכובדת"
          subtitle="אור טבעי, חומרים חמים, ושקט שמאפשר להתעמק בלי להילחם ברעש."
        />
        <div className={styles.grid}>
          {shots.map((s) => (
            <figure key={s.caption} className={styles.figure}>
              <div className={styles.imageWrap}>
                <img src={s.src} alt={s.alt} className={styles.image} loading="lazy" />
                <div className={styles.overlay} aria-hidden />
              </div>
              <figcaption className={styles.caption}>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
