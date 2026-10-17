import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useFavorites } from '../../context/FavoritesContext.jsx'
import { PATHS } from '../../router/paths.js'

const NAV_ITEMS = [
  { id: 'home', label: 'Главная', path: PATHS.home, end: true },
  { id: 'catalog', label: 'Каталог', path: PATHS.catalog },
  { id: 'favorites', label: 'Избранное', path: PATHS.favorites },
  { id: 'promotions', label: 'Акции', path: PATHS.promotions },
  { id: 'help', label: 'Помощь', path: PATHS.help },
]

/**
 * Шапка сайта с маршрутами React Router
 *
 * @param {Object} props
 * @param {string} [props.searchValue] - Текущее значение поля поиска
 * @param {Function} [props.onSearchChange] - Коллбек ввода в поле поиска
 * @param {Function} [props.onProfileClick] - Коллбек клика по меню профиля
 * @param {string} [props.className] - Дополнительные CSS-классы
 */
export default function Header({
  searchValue: externalSearchValue,
  onSearchChange,
  onProfileClick,
  className = '',
}) {
  const [internalSearch, setInternalSearch] = useState('')
  const searchVal = externalSearchValue !== undefined ? externalSearchValue : internalSearch
  const { count: favoritesCount } = useFavorites()

  const handleSearchInput = (e) => {
    if (onSearchChange) {
      onSearchChange(e.target.value)
    } else {
      setInternalSearch(e.target.value)
    }
  }

  return (
    <header className={`sticky top-0 z-40 w-full bg-white border-b border-slate-200/80 shadow-2xs ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-3 sm:gap-6">
          
          {/* 1. Блок бренда: розовый круглый логотип + название */}
          <Link to={PATHS.home} className="flex items-center gap-3 shrink-0 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-full">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-600 flex items-center justify-center text-white shadow-xs transition-transform duration-200 hover:scale-105">
              {/* Иконка пакета/сумки Lumina Marketplace */}
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight whitespace-nowrap">
              Lumina Marketplace
            </span>
          </Link>

          {/* 2. Навигационное меню */}
          <nav
            aria-label="Основная навигация"
            className="hidden md:flex items-center gap-5 lg:gap-7"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 rounded-md py-1 whitespace-nowrap ${
                    isActive
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-500 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* 3. Правая часть: поиск, избранное и меню профиля */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Поисковое поле */}
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none flex items-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <input
                type="search"
                value={searchVal}
                onChange={handleSearchInput}
                placeholder="Поиск товаров..."
                aria-label="Поиск товаров"
                className="w-32 sm:w-48 md:w-56 lg:w-68 pl-9 pr-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200/90 rounded-full transition-all duration-200 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Иконка сердечка «Избранное» */}
            <Link
              to={PATHS.favorites}
              aria-label={favoritesCount > 0 ? `Избранное, ${favoritesCount}` : 'Перейти в избранное'}
              className="relative p-2 text-slate-700 hover:text-rose-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              {favoritesCount > 0 && (
                <span className="absolute top-0.5 right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold leading-none text-white">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* Кнопка профиля пользователя (иконка пользователя + стрелка вниз) */}
            <button
              type="button"
              onClick={onProfileClick}
              aria-label="Меню профиля"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <svg
                className="w-4.5 h-4.5 text-slate-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <svg
                className="w-3.5 h-3.5 text-slate-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}
