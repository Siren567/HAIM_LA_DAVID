/** פופאפ הצעת תרומה — פעם אחת לסשן (עגלה או קופה) */
const KEY = 'hld-donation-popup-dismissed'
const LEGACY_KEY = 'hld-cart-donation-popup-dismissed'

/** נשמר בלחיצה על קישור לקופה — שורד ריענון כש־location.state נמחק */
const INTENT_KEY = 'hld-checkout-intent'

export type CheckoutIntent = 'shop' | 'donations'

export function setCheckoutIntent(from: CheckoutIntent): void {
  if (typeof sessionStorage === 'undefined') return
  sessionStorage.setItem(INTENT_KEY, from)
}

export function getCheckoutIntent(): CheckoutIntent | null {
  if (typeof sessionStorage === 'undefined') return null
  const v = sessionStorage.getItem(INTENT_KEY)
  return v === 'shop' || v === 'donations' ? v : null
}

export function isDonationPopupDismissed(): boolean {
  if (typeof sessionStorage === 'undefined') return true
  return (
    sessionStorage.getItem(KEY) === '1' || sessionStorage.getItem(LEGACY_KEY) === '1'
  )
}

export function dismissDonationPopup(): void {
  sessionStorage.setItem(KEY, '1')
}
