export type ProductCategory =
  | 'siddurim'
  | 'tehillim'
  | 'talit-tefillin'
  | 'candlesticks'
  | 'kiddush'
  | 'mezuzah'
  | 'shabbat'
  | 'gifts'

export type Product = {
  id: string
  nameHe: string
  description: string
  price: number
  image: string
  category: ProductCategory
  featured?: boolean
  highlights: string[]
}

export const categoryLabels: Record<ProductCategory, string> = {
  siddurim: 'סידורים',
  tehillim: 'תהילים',
  'talit-tefillin': 'תיקי טלית ותפילין',
  candlesticks: 'פמוטים',
  kiddush: 'גביעי קידוש',
  mezuzah: 'בתי מזוזה',
  shabbat: 'סטים לשבת',
  gifts: 'מתנות יוקרה',
}

export const products: Product[] = [
  {
    id: 'siddur-koren-minimal',
    nameHe: 'סידור קורן — מהדורת יוקרה',
    description: 'הגהה מוקפדת, כריכה רכה בצבע שנהב, נייר קרם עבה ונעים למגע. מתאים לתפילה יומיומית בסגנון נקי ועמוק.',
    price: 189,
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
    category: 'siddurim',
    featured: true,
    highlights: ['כריכה מעור איטלקי', 'סימניה משי', 'הגהות מדויקות'],
  },
  {
    id: 'siddur-artscroll-pocket',
    nameHe: 'סידור ארטסקרול — כיס',
    description: 'מהדורה קומפקטית עם תרגום ופירוש נגיש. מושלם לנסיעות ולמי שמחפש בהירות מקסימלית בלי עומס.',
    price: 96,
    image:
      'https://images.unsplash.com/photo-1524990027879-84f36906d8fe?w=800&q=80',
    category: 'siddurim',
    highlights: ['כריכה קשה עמידה', 'אותיות ברורות', 'מפתח תפילות'],
  },
  {
    id: 'tehillim-leather-gold',
    nameHe: 'תהילים מעור עם הקדשה',
    description: 'כריכת עור חום עמוק עם חריטת זהב עדינה. מתנה ראויה לשבת חתן, בר מצווה או יום הולדת משמעותי.',
    price: 245,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80',
    category: 'tehillim',
    featured: true,
    highlights: ['הקדשה אישית', 'נייר משובח', 'סגירה מגנטית'],
  },
  {
    id: 'tehillim-pocket-white',
    nameHe: 'תהילים לבן — מהדורת בית כנסת',
    description: 'פורמט קטן ונוח, הדפסה חדה ושחורה עמוקה. נוח לנשיאה בכיס או בתיק תפילין.',
    price: 42,
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
    category: 'tehillim',
    highlights: ['קל משקל', 'כריכה מחוזקת', 'מחיר נגיש'],
  },
  {
    id: 'bag-talit-velvet-navy',
    nameHe: 'תיק קטיפה לטלית — כחול צי',
    description: 'קטיפה איטלקית עם רקמה זהב עדינה ורוכסן נשי לתחושת יוקרה שקטה. תואם את פלטת הצבעים של הישיבה.',
    price: 320,
    image:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
    category: 'talit-tefillin',
    featured: true,
    highlights: ['ריפוד פנימי', 'רצועת נשיאה', 'רקמה לפי בחירה'],
  },
  {
    id: 'bag-tefillin-leather',
    nameHe: 'תיק עור לתפילין — חום עמוק',
    description: 'עור מלא גרגר, תפירה כפולה וסגירה שקטה. נועד להחזיק שנים של שימוש יומיומי בכבוד.',
    price: 410,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    category: 'talit-tefillin',
    highlights: ['עור צמחי', 'פנים מרופד', 'נעילה מגנטית'],
  },
  {
    id: 'candlesticks-silver-pair',
    nameHe: 'זוג פמוטים — כסף טהור',
    description: 'קווים נקיים בסגנון קלאסי מודרני. משקל נעים ביד, ברק מתון שלא צועק אלא מכבד את השולחן.',
    price: 1280,
    image:
      'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=800&q=80',
    category: 'candlesticks',
    featured: true,
    highlights: ['כסף 925', 'ליטוש ידני', 'אריזת מתנה'],
  },
  {
    id: 'candlesticks-stone',
    nameHe: 'פמוטי אבן עם בסיס עץ',
    description: 'שילוב חומרים חמים: אבן טבעית ועץ אגוז. מתאים לבית שמחפש אווירה חמימה ולא מתכתית מדי.',
    price: 560,
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80',
    category: 'candlesticks',
    highlights: ['עבודת יד', 'ייצוב מעולה', 'גימור מט'],
  },
  {
    id: 'kiddush-cup-silver',
    nameHe: 'גביע קידוש — כסף מוברש',
    description: 'קיבולת נוחה, ידית עדינה ומשקל מאוזן. מושלם לקידוש בבית או לאירוח שבת מוקפד.',
    price: 890,
    image:
      'https://images.unsplash.com/photo-1601050690597-57f6a31576ad?w=800&q=80',
    category: 'kiddush',
    highlights: ['כסף 925', 'מיכל ליין נשלף', 'מארז קטיפה'],
  },
  {
    id: 'kiddush-crystal',
    nameHe: 'גביע קריסטל עם בסיס זהב',
    description: 'קריסטל שקוף עם שפה מוזהבת דקה. קו עיצובי שמרגיש חג בלי להיות מנקר.',
    price: 340,
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
    category: 'kiddush',
    highlights: ['קריסטל בוהמי', 'בסיס יציב', 'מתנה מוכנה'],
  },
  {
    id: 'mezuzah-case-brass',
    nameHe: 'בית מזוזה — פליז מוברש',
    description: 'פליז עם פטינה עדינה וחריטת ״שדי״ מינימלית. מתאים לפתח בית שמעריך שקט ויזואלי.',
    price: 185,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    category: 'mezuzah',
    highlights: ['התאמה לכל עץ', 'ברגים נסתרים', 'גימור עמיד'],
  },
  {
    id: 'mezuzah-wood-glass',
    nameHe: 'בית מזוזה — עץ וזכוכית',
    description: 'מסגרת עץ כהה עם חזית זכוכית. מדגיש את הקלף בצורה נקייה ומכובדת.',
    price: 125,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    category: 'mezuzah',
    highlights: ['הרכבה פשוטה', 'חומרים טבעיים', 'קו נקי'],
  },
  {
    id: 'shabbat-set-wood',
    nameHe: 'סט לשבת — מלחיה ובצקית',
    description: 'עץ מלא עם גימור שמן טבעי. סט אחיד שמרגיש שלמות על השולחן בלי עומס קישוטים.',
    price: 420,
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    category: 'shabbat',
    featured: true,
    highlights: ['עבודת נגרות', 'משטחים חלקים', 'אריזת בד'],
  },
  {
    id: 'shabbat-tray-marble',
    nameHe: 'מגש שבת — שיש לבן',
    description: 'משטח קריר לחלות, עם שוליים נמוכים למניעת פירורים. אלגנטיות שקטה.',
    price: 680,
    image:
      'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80',
    category: 'shabbat',
    highlights: ['שיש טבעי', 'משקל יציב', 'ניקוי קל'],
  },
  {
    id: 'gift-honey-dish',
    nameHe: 'כלי דבש ומגש זכוכית',
    description: 'סט למתנה או לראש השנה: זכוכית עבה וכסף מוברש. מגיע באריזת קרטון יוקרתית.',
    price: 295,
    image:
      'https://images.unsplash.com/photo-1587049352846-4a222e2d1244?w=800&q=80',
    category: 'gifts',
    highlights: ['מתאים למתנה', 'ניתן לחריטה', 'איכות מזון'],
  },
  {
    id: 'gift-wine-stopper',
    nameHe: 'פקק יין — כסף ואבן',
    description: 'פרט קטן שעושה הבדל: פקק יוקרתי לבקבוק יין לשבת או לאירוע משפחתי.',
    price: 165,
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    category: 'gifts',
    highlights: ['אבן טבעית', 'אטימה חזקה', 'מארז קטן'],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getProductsByCategory(category: ProductCategory | 'all'): Product[] {
  if (category === 'all') return products
  return products.filter((p) => p.category === category)
}
