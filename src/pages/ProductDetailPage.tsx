import { Link, Navigate, useParams } from 'react-router-dom'
import { categoryLabels, getProductById } from '../data/products'
import { AddToCartButton } from '../components/shop/AddToCartButton'
import { setCheckoutIntent } from '../utils/donationPopupStorage'
import { Container } from '../components/ui/Container'
import { ButtonLink } from '../components/ui/ButtonLink'
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder'
import styles from './ProductDetailPage.module.css'

export function ProductDetailPage() {
  const { id } = useParams()
  const product = id ? getProductById(id) : undefined
  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <>
      <div className={styles.hero}>
        <Container>
          <nav className={styles.breadcrumb} aria-label="מסלול ניווט">
            <Link to="/shop">חנות</Link>
            <span aria-hidden className={styles.crumbSep}>
              /
            </span>
            <span>{categoryLabels[product.category]}</span>
          </nav>
          <div className={styles.grid}>
            <div className={styles.visual}>
              <div className={styles.imageFrame}>
                {product.image ? (
                  <>
                    <img src={product.image} alt={product.nameHe} className={styles.image} />
                    <div className={styles.imageEdge} aria-hidden />
                  </>
                ) : (
                  <ImagePlaceholder label="תמונת מוצר בקרוב" className={styles.productPlaceholder} />
                )}
              </div>
            </div>
            <div className={styles.detail}>
              <p className={styles.eyebrow}>{categoryLabels[product.category]}</p>
              <h1 className={styles.title}>{product.nameHe}</h1>
              <p className={styles.price}>₪{product.price.toLocaleString('he-IL')}</p>
              <p className={styles.desc}>{product.description}</p>
              <ul className={styles.highlights}>
                {product.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className={styles.actions}>
                <AddToCartButton productId={product.id} variant="primary" className={styles.addBtn} />
                <ButtonLink
                  to="/checkout"
                  state={{ from: 'shop' }}
                  onClick={() => setCheckoutIntent('shop')}
                  variant="goldOutline"
                >
                  לקופה
                </ButtonLink>
              </div>
              <p className={styles.note}>
                ניתן להוסיף לעגלה ולעבור ישר לקופה לביצוע הזמנת דמה — ללא חיוב אמיתי וללא שליחת נתוני
                כרטיס לשרת.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
