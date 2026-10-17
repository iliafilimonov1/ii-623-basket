import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { getProductById } from '../data/products.js'

const STORAGE_KEY = 'lumina-favorites'
const FavoritesContext = createContext(null)

function readStoredIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'string') : []
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(readStoredIds)

  const persist = useCallback((ids) => {
    setFavoriteIds(ids)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  }, [])

  const isFavorite = useCallback(
    (productId) => favoriteIds.includes(productId),
    [favoriteIds],
  )

  const toggleFavorite = useCallback((productId) => {
    setFavoriteIds((current) => {
      const next = current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const clearFavorites = useCallback(() => {
    persist([])
  }, [persist])

  const favorites = useMemo(
    () => favoriteIds.map(getProductById).filter(Boolean),
    [favoriteIds],
  )

  const value = useMemo(
    () => ({
      favoriteIds,
      favorites,
      count: favorites.length,
      isFavorite,
      toggleFavorite,
      clearFavorites,
    }),
    [favoriteIds, favorites, isFavorite, toggleFavorite, clearFavorites],
  )

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites должен вызываться внутри FavoritesProvider')
  }
  return context
}
