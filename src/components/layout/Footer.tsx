import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBand} />
      <Container>
        <div className={styles.grid}>
          <div>
            <p className={styles.logo}>חיים לאדוד</p>
            <p className={styles.tagline}>
              מוסד תורני המשלב מסורת עמוקה, חינוך מדויק ואווירה של כבוד ושקט פנימי.
            </p>
          </div>
          <div>
            <p className={styles.colTitle}>ניווט</p>
            <ul className={styles.list}>
              <li>
                <Link to="/about">אודות</Link>
              </li>
              <li>
                <Link to="/programs">מסלולי לימוד</Link>
              </li>
              <li>
                <Link to="/staff">רבני הישיבה</Link>
              </li>
              <li>
                <Link to="/gallery">גלריה</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>חנות</p>
            <ul className={styles.list}>
              <li>
                <Link to="/shop">כל המוצרים</Link>
              </li>
              <li>
                <Link to="/contact">שירות וייעוץ</Link>
              </li>
              <li>
                <Link to="/cart">עגלת קניות</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>קשר</p>
            <p className={styles.address}>
              רחוב התורה 12, ירושלים
              <br />
              טלפון: 02-500-1234
              <br />
              אימייל: info@haimladavid.org.il
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} ישיבת חיים לאדוד. כל הזכויות שמורות.</span>
          <span className={styles.note}>אתר זה הוקם להצגה — חיבור למערכות ניהול יתווסף בהמשך.</span>
        </div>
      </Container>
    </footer>
  )
}
