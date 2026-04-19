import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import styles from './CheckoutPage.module.css'

export function CheckoutPage() {
  const { items, subtotal, clear } = useCart()
  const [done, setDone] = useState(false)

  if (items.length === 0 && !done) {
    return (
      <>
        <PageHeader eyebrow="תשלום" title="קופה" lead="אין פריטים לחישוב — חזרו לעגלה או לחנות." />
        <section className="page-section page-section--cream">
          <Container narrow>
            <div className={styles.empty}>
              <Link to="/cart" className={styles.back}>
                חזרה לעגלה
              </Link>
            </div>
          </Container>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHeader
        eyebrow="תשלום"
        title="השלמת הזמנה"
        lead="טופס דמה — פרטי משלוח ותשלום יחוברו למערכת בהמשך."
      />
      <section className="page-section page-section--cream">
        <Container narrow>
          {done ? (
            <div className={styles.success}>
              <h2 className={styles.successTitle}>ההזמנה נקלטה (הדגמה)</h2>
              <p className={styles.successText}>
                תודה! במערכת אמיתית כאן יופיע אישור ומספר הזמנה.
              </p>
              <Link to="/shop" className={styles.back}>
                חזרה לחנות
              </Link>
            </div>
          ) : (
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault()
                clear()
                setDone(true)
              }}
            >
              <div className={styles.split}>
                <div>
                  <h2 className={styles.blockTitle}>פרטי משלוח</h2>
                  <label className={styles.field}>
                    <span className={styles.label}>שם מלא</span>
                    <input className={styles.input} name="fullName" required />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.label}>עיר ורחוב</span>
                    <input className={styles.input} name="address" required />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.label}>טלפון</span>
                    <input className={styles.input} name="phone" type="tel" required />
                  </label>
                </div>
                <div>
                  <h2 className={styles.blockTitle}>תשלום (דמה)</h2>
                  <label className={styles.field}>
                    <span className={styles.label}>מספר כרטיס</span>
                    <input
                      className={styles.input}
                      name="card"
                      placeholder="0000 0000 0000 0000"
                      autoComplete="off"
                    />
                  </label>
                  <div className={styles.inline}>
                    <label className={styles.field}>
                      <span className={styles.label}>תוקף</span>
                      <input className={styles.input} name="exp" placeholder="MM/YY" />
                    </label>
                    <label className={styles.field}>
                      <span className={styles.label}>CVV</span>
                      <input className={styles.input} name="cvv" placeholder="***" />
                    </label>
                  </div>
                </div>
              </div>
              <aside className={styles.summary}>
                <p className={styles.sumLine}>
                  <span>סה״כ</span>
                  <span>₪{subtotal.toLocaleString('he-IL')}</span>
                </p>
                <p className={styles.sumNote}>כולל מע״מ לפי הדין. משלוח יחושב בהמשך.</p>
                <Button variant="primary" type="submit" className={styles.pay}>
                  אישור והזמנה
                </Button>
              </aside>
            </form>
          )}
        </Container>
      </section>
    </>
  )
}
