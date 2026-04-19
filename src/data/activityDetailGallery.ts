import type { GalleryItem } from './gallery'

const LABELS = [
  'עוד רגעים מהמוסד',
  'תמונה תתווסף בקרוב',
  'בית המדרש',
  'לימוד וחברותא',
  'קהילה',
  'שבת וחג',
  'חסד',
  'פעילות',
] as const

/** 8 משבצות placeholder — עיצוב אחיד; תוויות לפי מיקום */
export function buildActivityGalleryItems(activityId: string): GalleryItem[] {
  return LABELS.map((label, i) => ({
    kind: 'placeholder' as const,
    id: `act-${activityId}-ph-${i + 1}`,
    label,
    slot: (i + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
  }))
}
