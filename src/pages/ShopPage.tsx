import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { setCheckoutIntent } from '../utils/donationPopupStorage'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/ui/Container'
import { ProductCard } from '../components/shop/ProductCard'
import { useCart } from '../context/useCart'
import {
  categoryLabels,
  getShopProductsByCategory,
  type ProductCategory,
} from '../data/products'
import styles from './ShopPage.module.css'

const allKey = 'all' as const

const categoryOrder: ProductCategory[] = [
  'siddurim',
  'tehillim',
  'talit-tefillin',
  'kippot',
  'candlesticks',
  'kiddush',
  'mezuzah',
  'shabbat',
  'gifts',
]

const categories: { key: typeof allKey | ProductCategory; label: string }[] = [
  { key: allKey, label: 'הכל' },
  ...categoryOrder.map((key) => ({ key, label: categoryLabels[key] })),
]

export function ShopPage() {
  const [cat, setCat] = useState<typeof allKey | ProductCategory>(allKey)
  const { itemCount } = useCart()

  const list = useMemo(() => getShopProductsByCategory(cat), [cat])

  return (
    <>
      <PageHeader
        eyebrow="חנות אינטרנטית"
        title="יודאיקה — מוצרי קדושה"
        lead="חנות רשמית של ישיבת חיים לדוד — סידורים, תהילים, כלי מצווה ומתנות, בקפידה ובשפה אחת עם בית המדרש."
      />

      <section className={styles.storeIntro} aria-label="איך קונים באתר">
        <Container>
          <div className={styles.storeIntroGrid}>
            <div className={styles.storeIntroCopy}>
              <h2 className={styles.storeIntroTitle}>חנות הישיבה</h2>
              <p className={styles.storeIntroText}>
                כאן תמצאו את חנות ישיבת חיים לדוד — מקום לרכישת מוצרי קדושה ומתנות שנבחרו
                בקפידה, בהתאמה לרוח בית המדרש ולקהילה. הרכישה מהאתר מאפשרת לבחור בנוחות, לצבור
                עגלה ולהמשיך לתשלום מאובטח.
              </p>
              <p className={styles.storeIntroNote}>
                התשלום כאן מדומה — אפשר להשלים הזמנה פיקטיבית ולקבל מסך אישור עם מספר הזמנה.
              </p>
            </div>
            <ol className={styles.storeSteps}>
              <li>
                <span className={styles.stepNum} aria-hidden>
                  1
                </span>
                <span className={styles.stepText}>בוחרים קטגוריה ומוצר מהקטלוג</span>
              </li>
              <li>
                <span className={styles.stepNum} aria-hidden>
                  2
                </span>
                <span className={styles.stepText}>מוסיפים לעגלה או נכנסים לדף המוצר</span>
              </li>
              <li>
                <span className={styles.stepNum} aria-hidden>
                  3
                </span>
                <span className={styles.stepText}>ממשיכים לעגלה ולתשלום</span>
              </li>
            </ol>
            <div className={styles.checkoutCol}>
              <div className={styles.checkoutGroup} dir="rtl">
                <Link
                  to="/checkout"
                  state={{ from: 'shop' }}
                  onClick={() => setCheckoutIntent('shop')}
                  className={styles.checkoutBtn}
                  aria-label={
                    itemCount > 0
                      ? `סיום הזמנה, ${itemCount === 1 ? 'פריט אחד בעגלה' : `${itemCount} פריטים בעגלה`}`
                      : 'סיום הזמנה — העגלה ריקה'
                  }
                >
                  סיום הזמנה
                </Link>
                <span className={styles.checkoutCount} aria-live="polite">
                  <span className="visually-hidden">
                    {itemCount === 1
                      ? 'פריט אחד בעגלה'
                      : itemCount === 0
                        ? 'אין פריטים בעגלה'
                        : `${itemCount} פריטים בעגלה`}
                  </span>
                  <span aria-hidden>{itemCount > 99 ? '99+' : itemCount}</span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section page-section--muted">
        <Container>
          <h2 className={styles.catalogHeading}>הקטלוג</h2>
          <div className={styles.filters} role="tablist" aria-label="קטגוריות">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={cat === c.key}
                className={`${styles.chip} ${cat === c.key ? styles.chipActive : ''}`}
                onClick={() => setCat(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className={styles.grid}>
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
