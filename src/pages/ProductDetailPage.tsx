import { Link, Navigate, useParams } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { categoryLabels, getProductById } from '../data/products'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { ButtonLink } from '../components/ui/ButtonLink'
import styles from './ProductDetailPage.module.css'

export function ProductDetailPage() {
  const { id } = useParams()
  const product = id ? getProductById(id) : undefined
  const { addItem } = useCart()

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
                <img src={product.image} alt="" className={styles.image} />
                <div className={styles.imageEdge} aria-hidden />
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
                <Button variant="primary" type="button" onClick={() => addItem(product.id)}>
                  הוספה לעגלה
                </Button>
                <ButtonLink to="/cart" variant="goldOutline">
                  לעגלת הקניות
                </ButtonLink>
              </div>
              <p className={styles.note}>
                רכישה דרך האתר תתאפשר לאחר חיבור תשלומים — כרגע מדובר בתצוגה בלבד.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
