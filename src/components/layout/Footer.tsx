import { Link } from 'react-router-dom'
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL_DISPLAY,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from '../../data/contact'
import { SiteLogo } from '../branding/SiteLogo'
import { Container } from '../ui/Container'
import { SocialIcons } from './SocialIcons'
import styles from './Footer.module.css'

const FOOTER_NAV = [
  { to: '/', label: 'דף הבית' },
  { to: '/institutions', label: 'מוסדות' },
  { to: '/activities', label: 'פעילות' },
  { to: '/shop', label: 'יודאיקה' },
  { to: '/donations', label: 'תרומות' },
  { to: '/contact', label: 'צור קשר' },
] as const

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBand} />
      <Container>
        <div className={styles.mainGrid}>
          <div className={styles.brandCol}>
            <div className={styles.logoBlock}>
              <SiteLogo variant="dark" />
            </div>
            <p className={styles.tagline}>
              מוסד תורני — מסורת, חינוך ואווירה של כבוד.
            </p>
          </div>

          <nav className={styles.navCol} aria-label="ניווט תחתון">
            <h2 className={styles.navHeading}>ניווט מהיר</h2>
            <ul className={styles.navList}>
              {FOOTER_NAV.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={styles.navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.socialCol}>
            <p className={styles.socialLabel}>עקבו אחרינו</p>
            <SocialIcons />
          </div>
        </div>

        <div className={styles.contactRow} role="group" aria-label="פרטי קשר">
          <a href={CONTACT_PHONE_TEL} className={styles.contactItem}>
            <span className={styles.contactValue}>{CONTACT_PHONE_DISPLAY}</span>
          </a>
          <span className={styles.contactDivider} aria-hidden />
          <a href={CONTACT_EMAIL_HREF} className={styles.contactItem}>
            <span className={styles.contactValue}>{CONTACT_EMAIL_DISPLAY}</span>
          </a>
          <span className={styles.contactDivider} aria-hidden />
          <span className={`${styles.contactItem} ${styles.contactAddress}`}>
            <span className={styles.contactValue}>{CONTACT_ADDRESS}</span>
          </span>
        </div>
      </Container>

      <div className={styles.bottomStrip}>
        <Container>
          <p className={styles.copyright}>© כל הזכויות שמורות לישיבת חיים לדוד</p>
        </Container>
      </div>
    </footer>
  )
}
