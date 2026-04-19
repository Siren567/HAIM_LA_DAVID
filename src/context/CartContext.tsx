/* Context module: exports provider and context object for the cart hook. */
/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { getProductById, type Product } from '../data/products'

export type CartLine = {
  productId: string
  quantity: number
}

type CartContextValue = {
  lines: CartLine[]
  items: { product: Product; quantity: number }[]
  itemCount: number
  subtotal: number
  addItem: (productId: string, quantity?: number) => void
  setQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  clear: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'haim-la-david-cart'

function loadLines(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartLine[]
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (l) =>
        l &&
        typeof l.productId === 'string' &&
        typeof l.quantity === 'number' &&
        l.quantity > 0,
    )
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() =>
    typeof window !== 'undefined' ? loadLines() : [],
  )

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines])

  const addItem = useCallback((productId: string, quantity = 1) => {
    setLines((prev) => {
      const idx = prev.findIndex((l) => l.productId === productId)
      if (idx === -1) {
        return [...prev, { productId, quantity: Math.max(1, quantity) }]
      }
      const next = [...prev]
      next[idx] = {
        ...next[idx],
        quantity: next[idx].quantity + Math.max(1, quantity),
      }
      return next
    })
  }, [])

  const setQuantity = useCallback((productId: string, quantity: number) => {
    const q = Math.max(0, Math.floor(quantity))
    setLines((prev) => {
      if (q === 0) return prev.filter((l) => l.productId !== productId)
      const idx = prev.findIndex((l) => l.productId === productId)
      if (idx === -1) return [...prev, { productId, quantity: q }]
      const next = [...prev]
      next[idx] = { ...next[idx], quantity: q }
      return next
    })
  }, [])

  const removeItem = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId))
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const items = useMemo(() => {
    const result: { product: Product; quantity: number }[] = []
    for (const line of lines) {
      const product = getProductById(line.productId)
      if (product) result.push({ product, quantity: line.quantity })
    }
    return result
  }, [lines])

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [items],
  )

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      lines,
      items,
      itemCount,
      subtotal,
      addItem,
      setQuantity,
      removeItem,
      clear,
    }),
    [lines, items, itemCount, subtotal, addItem, setQuantity, removeItem, clear],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
