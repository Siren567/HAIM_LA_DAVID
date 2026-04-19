import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../context/useCart'
import styles from './Navbar.module.css'

const navLinks = [
  { to: '/', label: 'בית' },
  { to: '/about', label: 'אודות' },
  { to: '/staff', label: 'רבני הישיבה' },
  { to: '/programs', label: 'מסלולי לימוד' },
  { to: '/gallery', label: 'גלריה' },
  { to: '/shop', label: 'חנות יודאיקה' },
  { to: '/contact', label: 'צור קשר' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden />
          <span className={styles.brandText}>
            <span className={styles.brandName}>חיים לאדוד</span>
            <span className={styles.brandTag}>ישיבה תורנית</span>
          </span>
        </Link>

        <nav
          id="primary-nav"
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
          aria-label="ניווט ראשי"
        >
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.linkActive : ''}`
              }
              onClick={() => setOpen(false)}
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link to="/cart" className={styles.cart} aria-label={`עגלת קניות, ${itemCount} פריטים`}>
            <span className={styles.cartIcon} aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 7h15l-1.5 9H7.5L6 7Zm0 0L5 3H2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="9" cy="20" r="1.3" fill="currentColor" />
                <circle cx="18" cy="20" r="1.3" fill="currentColor" />
              </svg>
            </span>
            {itemCount > 0 ? <span className={styles.cartBadge}>{itemCount}</span> : null}
          </Link>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">תפריט</span>
            <span className={styles.menuIcon} data-open={open} />
          </button>
        </div>
      </div>
    </header>
  )
}
