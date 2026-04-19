import type { IconType } from 'react-icons'
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
  SiYoutube,
} from 'react-icons/si'
import type { SocialNetwork } from '../../data/socialLinks'
import { SOCIAL_LINKS } from '../../data/socialLinks'
import styles from './SocialIcons.module.css'

type Props = {
  /** ברירת מחדל: רקע כהה (פוטר). light — רקע בהיר (דף צור קשר) */
  variant?: 'dark' | 'light'
}

const icons: Record<SocialNetwork, IconType> = {
  youtube: SiYoutube,
  whatsapp: SiWhatsapp,
  facebook: SiFacebook,
  tiktok: SiTiktok,
  instagram: SiInstagram,
}

export function SocialIcons({ variant = 'dark' }: Props) {
  const listClass = variant === 'light' ? `${styles.list} ${styles.listLight}` : styles.list

  return (
    <ul className={listClass} role="list">
      {SOCIAL_LINKS.map(({ id, label, href }) => {
        const Icon = icons[id]
        return (
          <li key={id} className={styles.item}>
            <a
              href={href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className={styles.icon} aria-hidden />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
