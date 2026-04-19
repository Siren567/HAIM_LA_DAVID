export type ProductCategory =
  | 'siddurim'
  | 'tehillim'
  | 'talit-tefillin'
  | 'kippot'
  | 'candlesticks'
  | 'kiddush'
  | 'mezuzah'
  | 'shabbat'
  | 'gifts'
  | 'donations'

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
  kippot: 'כיפות / כיסוי ראש',
  candlesticks: 'פמוטים',
  kiddush: 'גביעי קידוש',
  mezuzah: 'בתי מזוזה',
  shabbat: 'סטים לשבת',
  gifts: 'מתנות יוקרה',
  donations: 'תרומות',
}

/** תמונות להמחשה (Unsplash / Pexels) — להחלפה בתמונות מוצר אמיתיות */
const P = {
  siddurKoren:
    'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=800&q=80',
  siddurPocket:
    'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80',
  tehillimLeather:
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
  tehillimPocket:
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
  bagTalit:
    'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=800&q=80',
  bagTefillin:
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
  kippahVelvet:
    'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
  kippahKnit:
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
  candleSilver:
    'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
  candleStone:
    'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
  kiddushSilver:
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
  kiddushCrystal:
    'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=800&q=80',
  mezuzahBrass:
    'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=80',
  mezuzahWood:
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  shabbatWood:
    'https://images.pexels.com/photos/6608248/pexels-photo-6608248.jpeg?auto=compress&cs=tinysrgb&w=800',
  shabbatMarble:
    'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80',
  giftHoney:
    'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
  giftWine:
    'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80',
} as const

export const products: Product[] = [
  {
    id: 'siddur-koren-minimal',
    nameHe: 'סידור קורן — מהדורת יוקרה',
    description: 'הגהה מוקפדת, כריכה רכה בצבע שנהב, נייר קרם עבה ונעים למגע. מתאים לתפילה יומיומית בסגנון נקי ועמוק.',
    price: 189,
    image: P.siddurKoren,
    category: 'siddurim',
    featured: true,
    highlights: ['כריכה מעור איטלקי', 'סימניה משי', 'הגהות מדויקות'],
  },
  {
    id: 'siddur-artscroll-pocket',
    nameHe: 'סידור ארטסקרול — כיס',
    description: 'מהדורה קומפקטית עם תרגום ופירוש נגיש. מושלם לנסיעות ולמי שמחפש בהירות מקסימלית בלי עומס.',
    price: 96,
    image: P.siddurPocket,
    category: 'siddurim',
    highlights: ['כריכה קשה עמידה', 'אותיות ברורות', 'מפתח תפילות'],
  },
  {
    id: 'tehillim-leather-gold',
    nameHe: 'תהילים מעור עם הקדשה',
    description: 'כריכת עור חום עמוק עם חריטת זהב עדינה. מתנה ראויה לשבת חתן, בר מצווה או יום הולדת משמעותי.',
    price: 245,
    image: P.tehillimLeather,
    category: 'tehillim',
    featured: true,
    highlights: ['הקדשה אישית', 'נייר משובח', 'סגירה מגנטית'],
  },
  {
    id: 'tehillim-pocket-white',
    nameHe: 'תהילים לבן — מהדורת בית כנסת',
    description: 'פורמט קטן ונוח, הדפסה חדה ושחורה עמוקה. נוח לנשיאה בכיס או בתיק תפילין.',
    price: 42,
    image: P.tehillimPocket,
    category: 'tehillim',
    highlights: ['קל משקל', 'כריכה מחוזקת', 'מחיר נגיש'],
  },
  {
    id: 'bag-talit-velvet-navy',
    nameHe: 'תיק קטיפה לטלית — כחול צי',
    description: 'קטיפה איטלקית עם רקמה זהב עדינה ורוכסן נשי לתחושת יוקרה שקטה. תואם את פלטת הצבעים של הישיבה.',
    price: 320,
    image: P.bagTalit,
    category: 'talit-tefillin',
    featured: true,
    highlights: ['ריפוד פנימי', 'רצועת נשיאה', 'רקמה לפי בחירה'],
  },
  {
    id: 'bag-tefillin-leather',
    nameHe: 'תיק עור לתפילין — חום עמוק',
    description: 'עור מלא גרגר, תפירה כפולה וסגירה שקטה. נועד להחזיק שנים של שימוש יומיומי בכבוד.',
    price: 410,
    image: P.bagTefillin,
    category: 'talit-tefillin',
    highlights: ['עור צמחי', 'פנים מרופד', 'נעילה מגנטית'],
  },
  {
    id: 'kippah-velvet-navy',
    nameHe: 'כיפה קטיפה — כחול צי',
    description:
      'קטיפה עמוקה עם גימור נקי, נוחה לשעות ארוכות בבית המדרש. קו צבע שמתאים לשפת העיצוב של הישיבה.',
    price: 48,
    image: P.kippahVelvet,
    category: 'kippot',
    highlights: ['תפירה עמידה', 'מידה סטנדרטית', 'נשימה נוחה'],
  },
  {
    id: 'kippah-knit-fine',
    nameHe: 'כיפה סרוגה — עדינה',
    description:
      'סריגה צפופה ונעימה, אחיזה טובה בלי לחץ. מתאימה לשימוש יומיומי ולשבתות.',
    price: 36,
    image: P.kippahKnit,
    category: 'kippot',
    highlights: ['חוט איכותי', 'צבעים עמידים', 'שטיפה עדינה'],
  },
  {
    id: 'candlesticks-silver-pair',
    nameHe: 'זוג פמוטים — כסף טהור',
    description: 'קווים נקיים בסגנון קלאסי מודרני. משקל נעים ביד, ברק מתון שלא צועק אלא מכבד את השולחן.',
    price: 1280,
    image: P.candleSilver,
    category: 'candlesticks',
    featured: true,
    highlights: ['כסף 925', 'ליטוש ידני', 'אריזת מתנה'],
  },
  {
    id: 'candlesticks-stone',
    nameHe: 'פמוטי אבן עם בסיס עץ',
    description: 'שילוב חומרים חמים: אבן טבעית ועץ אגוז. מתאים לבית שמחפש אווירה חמימה ולא מתכתית מדי.',
    price: 560,
    image: P.candleStone,
    category: 'candlesticks',
    highlights: ['עבודת יד', 'ייצוב מעולה', 'גימור מט'],
  },
  {
    id: 'kiddush-cup-silver',
    nameHe: 'גביע קידוש — כסף מוברש',
    description: 'קיבולת נוחה, ידית עדינה ומשקל מאוזן. מושלם לקידוש בבית או לאירוח שבת מוקפד.',
    price: 890,
    image: P.kiddushSilver,
    category: 'kiddush',
    highlights: ['כסף 925', 'מיכל ליין נשלף', 'מארז קטיפה'],
  },
  {
    id: 'kiddush-crystal',
    nameHe: 'גביע קריסטל עם בסיס זהב',
    description: 'קריסטל שקוף עם שפה מוזהבת דקה. קו עיצובי שמרגיש חג בלי להיות מנקר.',
    price: 340,
    image: P.kiddushCrystal,
    category: 'kiddush',
    highlights: ['קריסטל בוהמי', 'בסיס יציב', 'מתנה מוכנה'],
  },
  {
    id: 'mezuzah-case-brass',
    nameHe: 'בית מזוזה — פליז מוברש',
    description: 'פליז עם פטינה עדינה וחריטת ״שדי״ מינימלית. מתאים לפתח בית שמעריך שקט ויזואלי.',
    price: 185,
    image: P.mezuzahBrass,
    category: 'mezuzah',
    highlights: ['התאמה לכל עץ', 'ברגים נסתרים', 'גימור עמיד'],
  },
  {
    id: 'mezuzah-wood-glass',
    nameHe: 'בית מזוזה — עץ וזכוכית',
    description: 'מסגרת עץ כהה עם חזית זכוכית. מדגיש את הקלף בצורה נקייה ומכובדת.',
    price: 125,
    image: P.mezuzahWood,
    category: 'mezuzah',
    highlights: ['הרכבה פשוטה', 'חומרים טבעיים', 'קו נקי'],
  },
  {
    id: 'shabbat-set-wood',
    nameHe: 'סט לשבת — מלחיה ובצקית',
    description: 'עץ מלא עם גימור שמן טבעי. סט אחיד שמרגיש שלמות על השולחן בלי עומס קישוטים.',
    price: 420,
    image: P.shabbatWood,
    category: 'shabbat',
    featured: true,
    highlights: ['עבודת נגרות', 'משטחים חלקים', 'אריזת בד'],
  },
  {
    id: 'shabbat-tray-marble',
    nameHe: 'מגש שבת — שיש לבן',
    description: 'משטח קריר לחלות, עם שוליים נמוכים למניעת פירורים. אלגנטיות שקטה.',
    price: 680,
    image: P.shabbatMarble,
    category: 'shabbat',
    highlights: ['שיש טבעי', 'משקל יציב', 'ניקוי קל'],
  },
  {
    id: 'gift-honey-dish',
    nameHe: 'כלי דבש ומגש זכוכית',
    description: 'סט למתנה או לראש השנה: זכוכית עבה וכסף מוברש. מגיע באריזת קרטון יוקרתית.',
    price: 295,
    image: P.giftHoney,
    category: 'gifts',
    highlights: ['מתאים למתנה', 'ניתן לחריטה', 'איכות מזון'],
  },
  {
    id: 'gift-wine-stopper',
    nameHe: 'פקק יין — כסף ואבן',
    description: 'פרט קטן שעושה הבדל: פקק יוקרתי לבקבוק יין לשבת או לאירוע משפחתי.',
    price: 165,
    image: P.giftWine,
    category: 'gifts',
    highlights: ['אבן טבעית', 'אטימה חזקה', 'מארז קטן'],
  },

  /* תרומות — מוצגות בדף תרומות; נוספות לעגלה כמו מוצר רגיל */
  {
    id: 'don-torah-50',
    nameHe: 'תמיכה חודשית — בסיס',
    description: 'תרומה חודשית קבועה לתמיכה בשיעורים ובשיעורי עיון בבית המדרש.',
    price: 50,
    image: P.siddurKoren,
    category: 'donations',
    highlights: ['חידוש חודשי', 'קבלה', 'ביטול בכל עת'],
  },
  {
    id: 'don-torah-180',
    nameHe: 'תמיכה חודשית — משפחתית',
    description: 'תרומה חודשית רחבה יותר — לתמיכה במוסדות הלימוד והשיעורים.',
    price: 180,
    image: P.tehillimLeather,
    category: 'donations',
    highlights: ['הוקרה בשם המשפחה', 'עדכונים תקופתיים'],
  },
  {
    id: 'don-torah-360',
    nameHe: 'מלגה לתלמיד',
    description: 'מימון חלקי למלגת לימודים לתלמיד בישיבה.',
    price: 360,
    image: P.bagTalit,
    category: 'donations',
    highlights: ['ייעוד מלגה', 'שקיפות'],
  },
  {
    id: 'don-torah-1200',
    nameHe: 'חבילת תמיכה שנתית',
    description: 'תמיכה משמעותית לשנה — לפיתוח תוכניות לימוד ופעילות תורנית.',
    price: 1200,
    image: P.candleSilver,
    category: 'donations',
    highlights: ['סיכום שנתי', 'הוקרה מיוחדת'],
  },
  {
    id: 'don-edu-120',
    nameHe: 'ספרי לימוד לתלמיד',
    description: 'מימון ספרים וחומרי לימוד לתלמידים הזקוקים לסיוע.',
    price: 120,
    image: P.tehillimPocket,
    category: 'donations',
    highlights: ['ייעוד לחינוך', 'מעקב'],
  },
  {
    id: 'don-edu-900',
    nameHe: 'תמיכה במוסד חינוך',
    description: 'תרומה משמעותית לפעילות שוטפת של מוסדות החינוך שלנו.',
    price: 900,
    image: P.mezuzahWood,
    category: 'donations',
    highlights: ['שקיפות', 'עדכונים'],
  },
  {
    id: 'don-com-200',
    nameHe: 'ארוחת שבת משותפת',
    description: 'סיוע בהפקת ארוחות שבת לקהילה ולאורחים.',
    price: 200,
    image: P.candleStone,
    category: 'donations',
    highlights: ['קהילה', 'שבת'],
  },
  {
    id: 'don-com-350',
    nameHe: 'חבילות מזון',
    description: 'תמיכה בחלוקת מזון למשפחות הנזקקות.',
    price: 350,
    image: P.giftHoney,
    category: 'donations',
    highlights: ['חסד', 'דיסקרטיות'],
  },
  {
    id: 'don-food-180',
    nameHe: 'סל מזון — מארז בסיסי',
    description: 'מזון יבש ומוצרי יסוד למשפחה — סל נתון לחלוקה במסגרת סלי מזון.',
    price: 180,
    image: P.kiddushCrystal,
    category: 'donations',
    highlights: ['סל מזון', 'חלוקה'],
  },
  {
    id: 'don-food-420',
    nameHe: 'סל מזון — מארז משפחתי',
    description: 'מגוון מוצרים למשפחה גדולה יותר — הרחבה לפי עונות וצרכים.',
    price: 420,
    image: P.shabbatWood,
    category: 'donations',
    highlights: ['מארז משפחתי', 'עדכון לפי עונה'],
  },
  {
    id: 'don-com-400',
    nameHe: 'נוער — חונכות וליווי',
    description: 'מימון פעילות חונכות וליווי לנוער.',
    price: 400,
    image: P.kippahVelvet,
    category: 'donations',
    highlights: ['מקצועיות', 'מעקב'],
  },
  {
    id: 'don-com-750',
    nameHe: 'תמיכה כללית בקהילה',
    description: 'תרומה גמישה לפרויקטים קהילתיים — חסד, שבתות ועוד.',
    price: 750,
    image: P.kiddushSilver,
    category: 'donations',
    highlights: ['גמישות', 'התאמה לצורך'],
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

/** קטלוג חנות היודאיקה — ללא תרומות (מופיעות בדף תרומות נפרד) */
export function getShopProductsByCategory(category: ProductCategory | 'all'): Product[] {
  if (category === 'all') {
    return products.filter((p) => p.category !== 'donations')
  }
  return getProductsByCategory(category)
}
