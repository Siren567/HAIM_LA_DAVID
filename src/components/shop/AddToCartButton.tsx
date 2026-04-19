import { useEffect, useRef, useState } from 'react'
import { useCart } from '../../context/useCart'
import { Button } from '../ui/Button'
import styles from './AddToCartButton.module.css'

const FEEDBACK_MS = 2200

type Props = {
  productId: string
  /** ברירת מחדל: מסגרת זהב כמו בכרטיס מוצר */
  variant?: 'primary' | 'goldOutline'
  className?: string
}

export function AddToCartButton({ productId, variant = 'goldOutline', className = '' }: Props) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== undefined) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  function handleClick() {
    addItem(productId)
    setAdded(true)
    if (timeoutRef.current !== undefined) {
      window.clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = window.setTimeout(() => {
      setAdded(false)
      timeoutRef.current = undefined
    }, FEEDBACK_MS)
  }

  return (
    <Button
      type="button"
      variant={variant}
      className={`${className} ${added ? styles.success : ''}`.trim()}
      onClick={handleClick}
      aria-live="polite"
    >
      {added ? (
        <span className={styles.addedInner}>
          <span className={styles.check} aria-hidden>
            ✓
          </span>
          נוסף לעגלה
        </span>
      ) : (
        'הוספה לעגלה'
      )}
    </Button>
  )
}
