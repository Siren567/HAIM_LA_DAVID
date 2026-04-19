/**
 * קישורי רשתות חברתיות
 * סדר תצוגה: יוטיוב, ווצאפ, פייסבוק, טיקטוק, אינסטגרם.
 */
export type SocialNetwork = 'youtube' | 'whatsapp' | 'facebook' | 'tiktok' | 'instagram'

export type SocialLinkItem = {
  id: SocialNetwork
  /** תווית לנגישות ולמסך קורא */
  label: string
  href: string
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { id: 'youtube', label: 'יוטיוב', href: 'https://www.youtube.com/@rabbishaiperry' },
  { id: 'whatsapp', label: 'ווצאפ', href: 'https://www.whatsapp.com/channel/0029VaVz9cOJZg40CEmkHA09' },
  { id: 'facebook', label: 'פייסבוק', href: 'https://www.facebook.com/rabbishayperry' },
  { id: 'tiktok', label: 'טיקטוק', href: 'https://www.tiktok.com/@rabi_ishay_perry' },
  { id: 'instagram', label: 'אינסטגרם', href: 'https://www.instagram.com/rabishayperry' },
]
