import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { setCheckoutIntent } from '../utils/donationPopupStorage'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/ui/Container'
import { ButtonLink } from '../components/ui/ButtonLink'
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder'
import styles from './CartPage.module.css'

export function CartPage() {
  const { items, subtotal, setQuantity, removeItem, itemCount } = useCart()

  return (
    <>
      <PageHeader
        eyebrow="עגלה"
        title="עגלת קניות"
        lead="עדכנו כמויות, בדקו סיכום, והמשיכו לתשלום — הזמנת הדגמה ללא חיוב אמיתי."
      />
      <section className="page-section page-section--cream">
        <Container narrow>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <p className={styles.emptyText}>העגלה ריקה כרגע.</p>
              <ButtonLink to="/shop" variant="primary">
                לחנות
              </ButtonLink>
            </div>
          ) : (
            <div className={styles.layout}>
              <ul className={styles.list}>
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className={styles.row}>
                    <Link to={`/shop/${product.id}`} className={styles.thumbLink}>
                      {product.image ? (
                        <img src={product.image} alt={product.nameHe} className={styles.thumb} />
                      ) : (
                        <ImagePlaceholder compact label="מוצר" className={styles.thumbPlaceholder} />
                      )}
                    </Link>
                    <div className={styles.info}>
                      <Link to={`/shop/${product.id}`} className={styles.name}>
                        {product.nameHe}
                      </Link>
                      <p className={styles.unit}>₪{product.price.toLocaleString('he-IL')} ליחידה</p>
                      <div className={styles.controls}>
                        <label className={styles.qty}>
                          <span className="visually-hidden">כמות</span>
                          <input
                            className={styles.qtyInput}
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={(e) =>
                              setQuantity(product.id, Number.parseInt(e.target.value, 10) || 1)
                            }
                          />
                        </label>
                        <button
                          type="button"
                          className={styles.remove}
                          onClick={() => removeItem(product.id)}
                        >
                          הסרה
                        </button>
                      </div>
                    </div>
                    <p className={styles.lineTotal}>
                      ₪{(product.price * quantity).toLocaleString('he-IL')}
                    </p>
                  </li>
                ))}
              </ul>
              <aside className={styles.summary} aria-labelledby="cart-summary-title">
                <h2 id="cart-summary-title" className={styles.summaryTitle}>
                  סיכום הזמנה
                </h2>
                <p className={styles.summaryMeta}>
                  {itemCount === 1 ? 'פריט אחד בעגלה' : `${itemCount} פריטים בעגלה`}
                </p>
                <p className={styles.sumRow}>
                  <span>סה״כ לפני משלוח</span>
                  <span>₪{subtotal.toLocaleString('he-IL')}</span>
                </p>
                <p className={styles.sumHint}>משלוח יחושב בשלב הבא (דמה).</p>
                <ButtonLink
                  to="/checkout"
                  state={{ from: 'shop' }}
                  onClick={() => setCheckoutIntent('shop')}
                  variant="primary"
                  className={styles.checkout}
                >
                  המשך לתשלום
                </ButtonLink>
                <Link to="/shop" className={styles.linkShop}>
                  המשך לקנות
                </Link>
              </aside>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
