import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'
import { AddToCartButton } from './AddToCartButton'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import styles from './ProductCard.module.css'

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  return (
    <article className={styles.card}>
      <Link to={`/shop/${product.id}`} className={styles.imageLink}>
        <div className={styles.imageWrap}>
          {product.image ? (
            <>
              <img
                src={product.image}
                alt={product.nameHe}
                loading="lazy"
                className={styles.image}
              />
              <div className={styles.imageOverlay} aria-hidden />
            </>
          ) : (
            <ImagePlaceholder label="תמונת מוצר בקרוב" className={styles.productPlaceholder} />
          )}
        </div>
      </Link>
      <div className={styles.body}>
        <Link to={`/shop/${product.id}`} className={styles.title}>
          {product.nameHe}
        </Link>
        <p className={styles.desc}>{product.description}</p>
        <div className={styles.meta}>
          <span className={styles.price}>₪{product.price.toLocaleString('he-IL')}</span>
          <AddToCartButton productId={product.id} variant="goldOutline" className={styles.btn} />
        </div>
      </div>
    </article>
  )
}
