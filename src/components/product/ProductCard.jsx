import { useState } from 'react'

/**
 * Компонент карточки товара / жилья (по дизайн-системе)
 *
 * @param {Object} props
 * @param {string} props.image - URL изображения
 * @param {string} [props.imageAlt] - Текст alt для изображения
 * @param {string} [props.badgeText] - Текст бейджа (например, "Выбор гостей")
 * @param {string} props.title - Название (например, "Комната, 13-й округ")
 * @param {string} [props.subtitle] - Вторичный текст / даты (например, "7–9 авг.")
 * @param {number|string} props.price - Цена
 * @param {string} [props.currency] - Валюта (например, "$ MXN" или "₽")
 * @param {string} [props.pricePrefix] - Префикс к цене (например, "Всего ")
 * @param {number|string} [props.rating] - Рейтинг (например, 4.93)
 * @param {boolean} [props.isFavorite] - Флаг избранного (для контролируемого режима)
 * @param {Function} [props.onFavoriteToggle] - Коллбек при переключении избранного
 * @param {Function} [props.onClick] - Коллбек при клике на саму карточку
 * @param {boolean} [props.showCartAction] - Показать кнопку «В корзину»
 * @param {string} [props.className] - Дополнительные CSS-классы для обертки
 */
export default function ProductCard({
  image = 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
  imageAlt = '',
  badgeText = 'Выбор гостей',
  title = 'Комната, 13-й округ',
  subtitle = '7–9 авг.',
  price = 3277,
  currency = '$ MXN',
  pricePrefix = 'Всего ',
  rating = 4.93,
  isFavorite: externalIsFavorite,
  onFavoriteToggle,
  onClick,
  showCartAction = false,
  className = '',
}) {
  const [internalFavorite, setInternalFavorite] = useState(false)
  const isFavorite = externalIsFavorite !== undefined ? externalIsFavorite : internalFavorite

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (onFavoriteToggle) {
      onFavoriteToggle(!isFavorite)
    } else {
      setInternalFavorite(!isFavorite)
    }
  }

  // Форматирование цены с пробелом тысяч
  const formattedPrice = typeof price === 'number'
    ? new Intl.NumberFormat('ru-RU').format(price)
    : price

  return (
    <article
      onClick={onClick}
      className={`group flex min-w-0 w-full flex-col cursor-pointer select-none ${className}`}
    >
      {/* Медиа-блок */}
      <div className="relative aspect-square w-full min-w-0 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
        <img
          src={image}
          alt={imageAlt || title}
          loading="lazy"
          className="absolute inset-0 h-full w-full max-w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Бейдж «Выбор гостей» */}
        {badgeText && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1.5 text-xs sm:text-[13px] font-semibold text-slate-900 shadow-sm backdrop-blur-md border border-white/60 dark:bg-slate-950/85 dark:text-slate-50 dark:border-slate-700/80">
              {badgeText}
            </span>
          </div>
        )}

        {/* Кнопка «В избранное» */}
        <button
          type="button"
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/25 backdrop-blur-xs transition-transform duration-200 hover:scale-110 hover:bg-black/35 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
        >
          <svg
            className={`h-4.5 w-4.5 transition-colors duration-200 ${
              isFavorite
                ? 'fill-rose-500 stroke-rose-500'
                : 'fill-none stroke-white stroke-[2.2]'
            }`}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>

      {/* Информационный блок */}
      <div className="pt-3 flex flex-col">
        {/* Строка 1: Название и рейтинг */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-[15px] sm:text-base font-bold text-slate-900 tracking-tight dark:text-slate-50">
            {title}
          </h3>

          {rating !== undefined && rating !== null && (
            <div className="flex items-center gap-1 shrink-0 text-sm sm:text-[15px] font-semibold text-slate-900 dark:text-slate-50">
              <svg
                className="h-3.5 w-3.5 fill-none stroke-slate-900 stroke-2 dark:stroke-slate-100"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>{typeof rating === 'number' ? rating.toFixed(2) : rating}</span>
            </div>
          )}
        </div>

        {/* Строка 2: Вторичное описание / даты */}
        {subtitle && (
          <p className="mt-0.5 text-sm text-slate-500 font-normal dark:text-slate-400">
            {subtitle}
          </p>
        )}

        {/* Строка 3: Стоимость */}
        {price !== undefined && price !== null && (
          <div className="mt-1 flex items-end justify-between gap-3">
            <p className="text-[15px] sm:text-base font-bold text-slate-900 tracking-tight dark:text-slate-50">
              {pricePrefix}
              {formattedPrice} {currency}
            </p>
            {showCartAction && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
                className="shrink-0 text-sm font-semibold text-rose-500 hover:text-rose-600 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-sm"
              >
                В корзину →
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export { ProductCard, ProductCard as Card }

