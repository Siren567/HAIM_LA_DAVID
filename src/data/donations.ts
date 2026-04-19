/**
 * קטגוריות תרומות בדף התרומות — כל בלוק: 4 מוצרים מקטגוריית `donations` ב־products.ts
 */
export type DonationCategoryBlock = {
  id: string
  title: string
  productIds: readonly [string, string, string, string]
}

export const donationCategoryBlocks: DonationCategoryBlock[] = [
  {
    id: 'community',
    title: 'קהילה וחסד',
    productIds: ['don-com-400', 'don-com-750', 'don-edu-120', 'don-edu-900'],
  },
  {
    id: 'torah',
    title: 'תמיכה בלימוד התורה',
    productIds: ['don-torah-50', 'don-torah-180', 'don-torah-360', 'don-torah-1200'],
  },
  {
    id: 'food-baskets',
    title: 'סלי מזון',
    productIds: ['don-com-350', 'don-com-200', 'don-food-180', 'don-food-420'],
  },
]
