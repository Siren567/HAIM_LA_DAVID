import { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'
import { galleryPhotosInOrder } from '../../data/gallery'
import { GalleryMasonry } from '../gallery/GalleryMasonry'
import styles from './HomeGallery.module.css'

const PHOTOS = galleryPhotosInOrder()

export function HomeGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const titleId = useId()
  const lightboxLabelId = useId()

  const close = useCallback(() => setOpenIndex(null), [])

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [openIndex, close])

  const active = openIndex !== null ? PHOTOS[openIndex] : null

  return (
    <section className={styles.section} aria-labelledby={titleId} dir="rtl">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            חיי הישיבה
          </h2>
          <p className={styles.subtitle}>
            טעימה מהאווירה, הלימוד והחיבור — רגעים אמיתיים מהמוסד
          </p>
        </header>

        <GalleryMasonry onPhotoClick={setOpenIndex} />
      </div>

      {active &&
        createPortal(
          <div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-labelledby={lightboxLabelId}
          >
            <button
              type="button"
              className={styles.lightboxBackdrop}
              aria-label="סגור תצוגה"
              onClick={close}
            />
            <figure className={styles.lightboxFigure}>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={close}
                aria-label="סגור"
              >
                <IoClose className={styles.closeIcon} aria-hidden />
              </button>
              <img
                className={styles.lightboxImg}
                src={active.src}
                alt=""
                aria-hidden
              />
              <figcaption className={styles.lightboxCaption} id={lightboxLabelId}>
                {active.alt}
              </figcaption>
            </figure>
          </div>,
          document.body,
        )}
    </section>
  )
}
