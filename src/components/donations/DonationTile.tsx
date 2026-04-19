import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'
import { AddToCartButton } from '../shop/AddToCartButton'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import styles from './DonationTile.module.css'

type Props = {
  product: Product
}

export function DonationTile({ product }: Props) {
  return (
    <article className={styles.tile}>
      <Link to={`/shop/${product.id}`} className={styles.imageLink} tabIndex={-1}>
        <div className={styles.imageWrap}>
          {product.image ? (
            <>
              <img
                src={product.image}
                alt={product.nameHe}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.imageOverlay} aria-hidden />
            </>
          ) : (
            <ImagePlaceholder label="תמונה" className={styles.placeholder} />
          )}
        </div>
      </Link>
      <div className={styles.body}>
        <Link to={`/shop/${product.id}`} className={styles.title}>
          {product.nameHe}
        </Link>
        <p className={styles.desc}>{product.description}</p>
        <p className={styles.price}>₪{product.price.toLocaleString('he-IL')}</p>
        <AddToCartButton productId={product.id} variant="goldOutline" className={styles.btn} />
      </div>
    </article>
  )
}
