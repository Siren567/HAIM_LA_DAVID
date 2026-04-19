import { useMemo, useState } from 'react'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/ui/Container'
import { ProductCard } from '../components/shop/ProductCard'
import {
  categoryLabels,
  getProductsByCategory,
  type ProductCategory,
} from '../data/products'
import styles from './ShopPage.module.css'

const allKey = 'all' as const

const categoryOrder: ProductCategory[] = [
  'siddurim',
  'tehillim',
  'talit-tefillin',
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

  const list = useMemo(() => getProductsByCategory(cat), [cat])

  return (
    <>
      <PageHeader
        eyebrow="חנות"
        title="יודאיקה ברמת איכות"
        lead="מוצרים שנבחרו בקפידה — קו עיצובי אחיד עם שפת המותג של הישיבה."
      />
      <section className="page-section page-section--muted">
        <Container>
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
