import { Link } from 'react-router-dom'
import { setCheckoutIntent } from '../utils/donationPopupStorage'
import { DonationTile } from '../components/donations/DonationTile'
import { donationCategoryBlocks } from '../data/donations'
import { getProductById } from '../data/products'
import styles from './DonationsPage.module.css'

export function DonationsPage() {
  return (
    <section className={styles.page} aria-labelledby="donations-page-title" dir="rtl">
      <div className={styles.shell}>
        <header className={styles.pageHeader}>
          <p className={styles.overline}>תמיכה</p>
          <h1 id="donations-page-title" className={styles.pageTitle}>
            תרומות
          </h1>
          <div className={styles.titleDivider} aria-hidden>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDiamond} />
            <span className={styles.dividerLine} />
          </div>
          <p className={styles.pageSubtitle}>
            בוחרים סכום ומוסיפים לעגלה — אפשר להשלים תרומה דרך תהליך ה־
            <Link
              to="/checkout"
              state={{ from: 'donations' }}
              onClick={() => setCheckoutIntent('donations')}
              className={styles.subtitleCheckoutLink}
            >
              קופה
            </Link>
            {' '}
            (ללא חיוב אמיתי).
          </p>
        </header>

        <div className={styles.categories}>
          {donationCategoryBlocks.map((block) => (
            <section key={block.id} className={styles.category} aria-labelledby={`don-cat-${block.id}`}>
              <h2 id={`don-cat-${block.id}`} className={styles.categoryTitle}>
                {block.title}
              </h2>
              <div className={styles.categoryRule} role="presentation" />
              <div className={styles.grid4}>
                {block.productIds.map((pid) => {
                  const product = getProductById(pid)
                  return product ? <DonationTile key={pid} product={product} /> : null
                })}
              </div>
            </section>
          ))}
        </div>

        <footer className={styles.pageFooter}>
          <p className={styles.footerText}>
            להשלמת התרומה עברו ל־
            <Link
              to="/checkout"
              state={{ from: 'donations' }}
              onClick={() => setCheckoutIntent('donations')}
              className={styles.footerLink}
            >
              קופה
            </Link>
            {' להשלמת ההזמנה.'}
          </p>
        </footer>
      </div>
    </section>
  )
}
