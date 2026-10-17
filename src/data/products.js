export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'Все товары' },
  { id: 'decor', label: 'Декор' },
  { id: 'furniture', label: 'Мебель' },
  { id: 'lighting', label: 'Освещение' },
  { id: 'textile', label: 'Текстиль' },
  { id: 'tableware', label: 'Посуда' },
]

export const products = [
  {
    id: 'minimalist-decor',
    title: 'Минималистичный декор',
    category: 'decor',
    subtitle: 'Доставка: 1–2 дня',
    price: 4500,
    currency: '₽',
    rating: 4.95,
    badgeText: 'Выбор гостей',
    image:
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Светлая свеча на нейтральном фоне',
  },
  {
    id: 'elegant-ceramics',
    title: 'Элегантная керамическая ваза',
    category: 'tableware',
    subtitle: 'Доставка: 2–3 дня',
    price: 3200,
    currency: '₽',
    rating: 4.88,
    badgeText: 'Выбор гостей',
    image:
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Керамическая ваза и кружка',
  },
  {
    id: 'wooden-desk-lamp',
    title: 'Деревянная настольная лампа',
    category: 'lighting',
    subtitle: 'В наличии',
    price: 7800,
    currency: '₽',
    rating: 4.92,
    badgeText: 'Выбор гостей',
    image:
      'https://images.unsplash.com/photo-1579656618142-5192f72e2d3d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Настольная лампа на деревянном столе',
  },
  {
    id: 'oak-armchair',
    title: 'Диван в скандинавском стиле',
    category: 'furniture',
    subtitle: 'Доставка: 3–5 дней',
    price: 18900,
    currency: '₽',
    rating: 4.86,
    badgeText: 'Выбор гостей',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Зелёный диван в светлом интерьере',
  },
  {
    id: 'linen-pillow',
    title: 'Льняная декоративная подушка',
    category: 'textile',
    subtitle: 'Доставка: завтра',
    price: 2100,
    currency: '₽',
    rating: 4.75,
    badgeText: '',
    image:
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Светлая льняная подушка',
  },
]

export function getProductById(productId) {
  return products.find((product) => product.id === productId)
}

export function getProductsByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') {
    return products
  }

  return products.filter((product) => product.category === categoryId)
}
