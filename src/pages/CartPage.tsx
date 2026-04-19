import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/ui/Container'
import { ButtonLink } from '../components/ui/ButtonLink'
import styles from './CartPage.module.css'

export function CartPage() {
  const { items, subtotal, setQuantity, removeItem } = useCart()

  return (
    <>
      <PageHeader
        eyebrow="עגלה"
        title="עגלת קניות"
        lead="סיכום רכישה — ממשק נקי, מוכן לחיבור תשלום בהמשך."
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
                      <img src={product.image} alt="" className={styles.thumb} />
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
              <aside className={styles.summary}>
                <p className={styles.sumRow}>
                  <span>סה״כ לפני משלוח</span>
                  <span>₪{subtotal.toLocaleString('he-IL')}</span>
                </p>
                <p className={styles.sumHint}>משלוח יחושב בשלב הבא (דמה).</p>
                <ButtonLink to="/checkout" variant="primary" className={styles.checkout}>
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
