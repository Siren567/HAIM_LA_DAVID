import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SiteLogo } from '../branding/SiteLogo'
import styles from './Navbar.module.css'

type NavItem = {
  to: string
  label: string
  isActive: (pathname: string) => boolean
  highlight?: 'donate'
}

/** RTL order: דף הבית → מוסדות → פעילות → יודאיקה → תרומות → צור קשר */
const navItems: NavItem[] = [
  { to: '/', label: 'דף הבית', isActive: (p) => p === '/' },
  {
    to: '/institutions',
    label: 'מוסדות',
    isActive: (p) => p.startsWith('/institutions'),
  },
  { to: '/activities', label: 'פעילות', isActive: (p) => p.startsWith('/activities') },
  { to: '/shop', label: 'יודאיקה', isActive: (p) => p.startsWith('/shop') },
  {
    to: '/donations',
    label: 'תרומות',
    isActive: (p) => p.startsWith('/donations'),
    highlight: 'donate',
  },
  { to: '/contact', label: 'צור קשר', isActive: (p) => p.startsWith('/contact') },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.brand}>
          <SiteLogo />
        </Link>

        <nav
          id="primary-nav"
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
          aria-label="ניווט ראשי"
        >
          {navItems.map((item) => {
            const active = item.isActive(pathname)
            const linkClass = [
              styles.link,
              item.highlight === 'donate' ? styles.linkDonate : '',
              active ? (item.highlight === 'donate' ? styles.linkDonateActive : styles.linkActive) : '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <Link
                key={item.to}
                to={item.to}
                className={linkClass}
                aria-current={active ? 'page' : undefined}
                onClick={() => {
                  setOpen(false)
                  if (item.to === '/' && pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

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
    </header>
  )
}
