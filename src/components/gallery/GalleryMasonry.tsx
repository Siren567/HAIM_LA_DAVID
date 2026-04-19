import { GALLERY_ITEMS, type GalleryItem } from '../../data/gallery'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import styles from './GalleryMasonry.module.css'

const SLOT_CLASS: Record<GalleryItem['slot'], string> = {
  1: styles.slot1,
  2: styles.slot2,
  3: styles.slot3,
  4: styles.slot4,
  5: styles.slot5,
  6: styles.slot6,
  7: styles.slot7,
  8: styles.slot8,
}

type Props = {
  /** ברירת מחדל: גלריית הבית */
  items?: GalleryItem[]
  onPhotoClick?: (photoIndex: number) => void
  /** false = תצוגה סטטית (למשל בדף פעילות) */
  interactive?: boolean
}

export function GalleryMasonry({ items, onPhotoClick, interactive = true }: Props) {
  const list = items ?? GALLERY_ITEMS
  const sorted = [...list].sort((a, b) => a.slot - b.slot)

  const photoBody = (item: Extract<GalleryItem, { kind: 'photo' }>) => (
    <>
      <span className={styles.frameInner}>
        <img
          className={styles.image}
          src={item.src}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <span className={styles.overlay} aria-hidden />
        <span className={styles.hoverTint} aria-hidden />
        <span className={styles.captionOverlay}>{item.caption}</span>
      </span>
    </>
  )

  return (
    <ul className={styles.root}>
      {sorted.map((item) => (
        <li key={item.id} className={`${styles.item} ${SLOT_CLASS[item.slot]}`}>
          {item.kind === 'placeholder' ? (
            <div className={styles.frame} aria-label={item.label}>
              <ImagePlaceholder label={item.label} className={styles.placeholderFill} />
            </div>
          ) : interactive ? (
            <button
              type="button"
              className={`${styles.hit} ${styles.frame}`}
              onClick={() => {
                const photos = sorted.filter((i): i is Extract<GalleryItem, { kind: 'photo' }> => i.kind === 'photo')
                const idx = photos.findIndex((p) => p.id === item.id)
                if (idx >= 0) onPhotoClick?.(idx)
              }}
              aria-label={`הגדל תמונה: ${item.alt}`}
            >
              {photoBody(item)}
            </button>
          ) : (
            <div className={`${styles.staticFrame} ${styles.frame}`}>
              {photoBody(item)}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
