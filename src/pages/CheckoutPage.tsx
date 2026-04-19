import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'
import { Link, useLocation } from 'react-router-dom'
import { CartDonationModal } from '../components/cart/CartDonationModal'
import { useCart } from '../context/useCart'
import {
  dismissDonationPopup,
  getCheckoutIntent,
  isDonationPopupDismissed,
} from '../utils/donationPopupStorage'
import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import styles from './CheckoutPage.module.css'

type CompletedOrder = {
  id: string
  placedAt: string
  customerName: string
  phone: string
  address: string
  lines: {
    productId: string
    nameHe: string
    quantity: number
    unitPrice: number
    lineTotal: number
  }[]
  subtotal: number
}

function formatOrderDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('he-IL', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

type CheckoutLocationState = { from?: 'shop' | 'donations' }

export function CheckoutPage() {
  const { items, subtotal, clear, removeItem } = useCart()
  const location = useLocation()
  const [completedOrder, setCompletedOrder] = useState<CompletedOrder | null>(null)
  const [donationPopupOpen, setDonationPopupOpen] = useState(false)

  const empty = items.length === 0 && !completedOrder
  /** state נעלם בריענון — משלימים מ-session שנשמר בלחיצה על קישור לקופה */
  const checkoutIntent =
    (location.state as CheckoutLocationState | null)?.from ?? getCheckoutIntent()
  const fromShop = checkoutIntent === 'shop'

  useEffect(() => {
    if (completedOrder) {
      setDonationPopupOpen(false)
      return
    }
    if (items.length === 0) return
    if (!fromShop) return
    if (isDonationPopupDismissed()) return
    setDonationPopupOpen(true)
  }, [items.length, completedOrder, fromShop, location.key])

  function closeDonationPopup() {
    dismissDonationPopup()
    setDonationPopupOpen(false)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const customerName = String(fd.get('fullName') ?? '').trim()
    const phone = String(fd.get('phone') ?? '').trim()
    const address = String(fd.get('address') ?? '').trim()
    if (!customerName || !phone || !address) return

    const id = `HD-${new Date().getFullYear()}-${String(Math.floor(1000 + Math.random() * 9000))}`
    const lines = items.map(({ product, quantity }) => ({
      productId: product.id,
      nameHe: product.nameHe,
      quantity,
      unitPrice: product.price,
      lineTotal: product.price * quantity,
    }))

    setCompletedOrder({
      id,
      placedAt: new Date().toISOString(),
      customerName,
      phone,
      address,
      lines,
      subtotal,
    })
    clear()
  }

  if (empty) {
    return (
      <>
        <PageHeader
          eyebrow="תשלום"
          title="קופה"
          lead="אין פריטים בעגלה — הוסיפו מוצרים מהחנות לפני ההמשך."
        />
        <section className="page-section page-section--cream">
          <Container narrow>
            <div className={styles.empty}>
              <p className={styles.emptyText}>לא ניתן להשלים הזמנה בלי פריטים.</p>
              <div className={styles.emptyActions}>
                <Link to="/shop" className={styles.emptyPrimary}>
                  לחנות
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </>
    )
  }

  if (completedOrder) {
    const o = completedOrder
    return (
      <>
        <PageHeader
          eyebrow="אישור"
          title="ההזמנה התקבלה"
          lead="זוהי הזמנת הדגמה — לא בוצע חיוב אמיתי."
        />
        <section className="page-section page-section--cream">
          <Container narrow>
            <div className={styles.confirmCard}>
              <div className={styles.confirmBadge} aria-hidden>
                ✓
              </div>
              <p className={styles.confirmKicker}>מספר הזמנה</p>
              <p className={styles.confirmOrderId}>{o.id}</p>
              <p className={styles.confirmMeta}>{formatOrderDate(o.placedAt)}</p>

              <div className={styles.confirmBlock}>
                <h2 className={styles.confirmBlockTitle}>פרטי משלוח</h2>
                <p className={styles.confirmLine}>
                  <strong>{o.customerName}</strong>
                </p>
                <p className={styles.confirmLine}>{o.phone}</p>
                <p className={styles.confirmLine}>{o.address}</p>
              </div>

              <div className={styles.confirmBlock}>
                <h2 className={styles.confirmBlockTitle}>פריטים</h2>
                <ul className={styles.confirmLines}>
                  {o.lines.map((line) => (
                    <li key={line.productId} className={styles.confirmRow}>
                      <span className={styles.confirmName}>
                        {line.nameHe}
                        <span className={styles.confirmQty}> ×{line.quantity}</span>
                      </span>
                      <span className={styles.confirmLinePrice}>
                        ₪{line.lineTotal.toLocaleString('he-IL')}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className={styles.confirmTotal}>
                  <span>סה״כ</span>
                  <span>₪{o.subtotal.toLocaleString('he-IL')}</span>
                </div>
              </div>

              <p className={styles.confirmFootnote}>
                במערכת אמיתית יישלח אישור במייל ובו מעקב משלוח. כאן זו סימולציה בלבד.
              </p>

              <div className={styles.confirmActions}>
                <Link to="/shop" className={styles.confirmBtnPrimary}>
                  חזרה לחנות
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </>
    )
  }

  return (
    <>
      <CartDonationModal isOpen={donationPopupOpen} onClose={closeDonationPopup} />
      <PageHeader
        eyebrow="תשלום"
        title="השלמת הזמנה"
        lead="מלאו פרטים — התשלום מדומה, ללא חיוב אמיתי."
      />
      <section className="page-section page-section--cream">
        <Container>
          <div className={styles.shell}>
            <form id="checkout-form" className={styles.formMain} onSubmit={handleSubmit}>
              <div className={styles.formSection}>
                <h2 className={styles.blockTitle}>פרטי משלוח</h2>
                <label className={styles.field}>
                  <span className={styles.label}>שם מלא</span>
                  <input
                    className={styles.input}
                    name="fullName"
                    required
                    autoComplete="name"
                    placeholder="ישראל ישראלי"
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>עיר ורחוב</span>
                  <input
                    className={styles.input}
                    name="address"
                    required
                    autoComplete="street-address"
                    placeholder="רחוב הרצל 12, חיפה"
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>טלפון</span>
                  <input
                    className={styles.input}
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="050-1234567"
                  />
                </label>
              </div>
              <div className={styles.formSection}>
                <h2 className={styles.blockTitle}>תשלום (דמה)</h2>
                <p className={styles.demoHint}>שדות כרטיס אשראי אופציונליים — לא נשמרים ולא נשלחים לשרת.</p>
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
                    <input
                      className={styles.input}
                      name="cvv"
                      placeholder="***"
                      inputMode="numeric"
                    />
                  </label>
                </div>
              </div>
            </form>

            <aside className={styles.orderPanel} aria-labelledby="checkout-summary-title">
              <h2 id="checkout-summary-title" className={styles.panelTitle}>
                סיכום הזמנה
              </h2>
              <ul className={styles.panelList}>
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className={styles.panelLine}>
                    <div className={styles.panelLineInfo}>
                      <span className={styles.panelName}>{product.nameHe}</span>
                      <span className={styles.panelMeta}>
                        ₪{product.price.toLocaleString('he-IL')} × {quantity}
                      </span>
                    </div>
                    <span className={styles.panelLineTotal}>
                      ₪{(product.price * quantity).toLocaleString('he-IL')}
                    </span>
                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={() => removeItem(product.id)}
                      aria-label={`הסרת ${product.nameHe} מהעגלה`}
                    >
                      <HiOutlineTrash className={styles.removeIcon} aria-hidden />
                    </button>
                  </li>
                ))}
              </ul>
              <div className={styles.panelDivider} />
              <div className={styles.panelSubtotal}>
                <span>סה״כ לפני משלוח</span>
                <span>₪{subtotal.toLocaleString('he-IL')}</span>
              </div>
              <p className={styles.panelNote}>משלוח יחושב במערכת אמיתית לפי כתובת.</p>
              <Button variant="primary" type="submit" form="checkout-form" className={styles.submitBtn}>
                אישור הזמנה
              </Button>
              <Link to="/shop" className={styles.panelBack}>
                חזרה לחנות
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
