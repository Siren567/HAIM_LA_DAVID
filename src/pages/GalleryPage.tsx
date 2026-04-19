import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/ui/Container'
import styles from './GalleryPage.module.css'

const images = [
  { src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80', cap: 'פינת עיון' },
  { src: 'https://images.unsplash.com/photo-1524990027879-84f36906d8fe?w=1200&q=80', cap: 'אולם לימוד' },
  { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80', cap: 'ספרייה' },
  { src: 'https://images.unsplash.com/photo-1568667256543-885aa25bacb0?w=1200&q=80', cap: 'חצר פנימית' },
  { src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&q=80', cap: 'בית כנסת' },
  { src: 'https://images.unsplash.com/photo-1513475382583-d06e58bcb0e0?w=1200&q=80', cap: 'פינת שיחה' },
]

export function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="גלריה"
        title="חיים במתחם"
        lead="רגעים מהקמפוס — אור, חומר, ושקט שמזמין לימוד."
      />
      <section className="page-section page-section--muted">
        <Container>
          <div className={styles.grid}>
            {images.map((img) => (
              <figure key={img.cap} className={styles.item}>
                <div className={styles.imageWrap}>
                  <img src={img.src} alt="" className={styles.image} loading="lazy" />
                  <div className={styles.overlay} aria-hidden />
                </div>
                <figcaption className={styles.caption}>{img.cap}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
