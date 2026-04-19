import { Link } from 'react-router-dom'
import { AddToCartButton } from '../shop/AddToCartButton'
import { Modal } from '../ui/Modal'
import { CART_DONATION_POPUP_PRODUCT_IDS } from '../../data/cartDonationPopup'
import { getProductById } from '../../data/products'
import styles from './CartDonationModal.module.css'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export function CartDonationModal({ isOpen, onClose }: Props) {
  const products = CART_DONATION_POPUP_PRODUCT_IDS.map((id) => getProductById(id)).filter(
    (p): p is NonNullable<typeof p> => p != null,
  )

  if (products.length === 0) return null

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel="הצעת תרומה לעגלה"
      variant="light"
      panelClassName={styles.panelWide}
    >
      <div className={styles.content}>
        <p className={styles.kicker}>תמיכה במוסד</p>
        <h2 className={styles.title}>רוצים להוסיף גם תרומה?</h2>
        <p className={styles.lead}>
          שלושה סכומים פופולריים — לחיצה מוסיפה לעגלה כמו כל מוצר, ואפשר להמשיך לתשלום.
        </p>
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <p className={styles.cardName}>{product.nameHe}</p>
              <p className={styles.cardPrice}>₪{product.price.toLocaleString('he-IL')}</p>
              <AddToCartButton productId={product.id} variant="goldOutline" className={styles.addBtn} />
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <Link to="/donations" className={styles.moreLink} onClick={onClose}>
            כל אפשרויות התרומה
          </Link>
          <button type="button" className={styles.dismiss} onClick={onClose}>
            לא עכשיו, תודה
          </button>
        </div>
      </div>
    </Modal>
  )
}
