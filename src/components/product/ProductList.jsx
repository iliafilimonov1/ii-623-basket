import { Link } from 'react-router-dom'
import { useFavorites } from '../../context/FavoritesContext.jsx'
import { PATHS } from '../../router/paths.js'
import ProductCard from './ProductCard.jsx'

/**
 * Сетка карточек каталога
 *
 * @param {Object} props
 * @param {Array} props.products - Список товаров
 * @param {string} [props.className]
 * @param {string} [props.emptyMessage]
 * @param {boolean} [props.showCartAction]
 */
export default function ProductList({
  products = [],
  className = '',
  emptyMessage = 'В этой категории пока нет товаров.',
  showCartAction = false,
}) {
  const { isFavorite, toggleFavorite } = useFavorites()

  if (products.length === 0) {
    return (
      <p className="w-full min-w-0 text-sm text-slate-500">
        {emptyMessage}
      </p>
    )
  }

  return (
    <div className={`grid w-full min-w-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
      {products.map((product) => (
        <Link
          key={product.id}
          to={PATHS.product(product.id)}
          className="block min-w-0 w-full max-w-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 transition-colors hover:border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
        >
          <ProductCard
            image={product.image}
            imageAlt={product.imageAlt}
            badgeText={product.badgeText}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            currency={product.currency}
            pricePrefix=""
            rating={product.rating}
            isFavorite={isFavorite(product.id)}
            onFavoriteToggle={() => toggleFavorite(product.id)}
            showCartAction={showCartAction}
          />
        </Link>
      ))}
    </div>
  )
}
