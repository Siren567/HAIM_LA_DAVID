/**
 * גלריית הבית — placeholder אחיד עד להחלפת תמונות אמיתיות
 */
export type GalleryPhotoItem = {
  kind: 'photo'
  id: string
  src: string
  alt: string
  caption: string
  slot: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

export type GalleryPlaceholderItem = {
  kind: 'placeholder'
  id: string
  label: string
  slot: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

export type GalleryItem = GalleryPhotoItem | GalleryPlaceholderItem

/** כל המשבצות — כרטיס placeholder אחיד (ללא תמונות פיקטיביות חיצוניות) */
export const GALLERY_ITEMS: GalleryItem[] = [
  { kind: 'placeholder', id: 'gal-ph-1', label: 'עוד רגעים מהמוסד', slot: 1 },
  { kind: 'placeholder', id: 'gal-ph-2', label: 'תמונה תתווסף בקרוב', slot: 2 },
  { kind: 'placeholder', id: 'gal-ph-3', label: 'בית המדרש', slot: 3 },
  { kind: 'placeholder', id: 'gal-ph-4', label: 'לימוד ושיעורים', slot: 4 },
  { kind: 'placeholder', id: 'gal-ph-5', label: 'קהילה ושבת', slot: 5 },
  { kind: 'placeholder', id: 'gal-ph-6', label: 'חסד והתנדבות', slot: 6 },
  { kind: 'placeholder', id: 'gal-ph-7', label: 'פעילות נוער', slot: 7 },
  { kind: 'placeholder', id: 'gal-ph-8', label: 'רגע מהמוסד', slot: 8 },
]

export function galleryPhotosInOrder(): GalleryPhotoItem[] {
  return GALLERY_ITEMS.filter((i): i is GalleryPhotoItem => i.kind === 'photo')
}
