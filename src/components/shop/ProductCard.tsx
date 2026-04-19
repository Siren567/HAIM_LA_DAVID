import { Link } from 'react-router-dom'
import { useCart } from '../../context/useCart'
import type { Product } from '../../data/products'
import { Button } from '../ui/Button'
import styles from './ProductCard.module.css'

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  const { addItem } = useCart()

  return (
    <article className={styles.card}>
      <Link to={`/shop/${product.id}`} className={styles.imageLink}>
        <div className={styles.imageWrap}>
          <img src={product.image} alt="" loading="lazy" className={styles.image} />
          <div className={styles.imageOverlay} aria-hidden />
        </div>
      </Link>
      <div className={styles.body}>
        <Link to={`/shop/${product.id}`} className={styles.title}>
          {product.nameHe}
        </Link>
        <p className={styles.desc}>{product.description}</p>
        <div className={styles.meta}>
          <span className={styles.price}>₪{product.price.toLocaleString('he-IL')}</span>
          <Button
            variant="goldOutline"
            className={styles.btn}
            onClick={() => addItem(product.id)}
          >
            הוספה לעגלה
          </Button>
        </div>
      </div>
    </article>
  )
}
