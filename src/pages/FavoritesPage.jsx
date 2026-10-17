import { Link } from 'react-router-dom'
import ProductList from '../components/product/ProductList.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { PATHS } from '../router/paths.js'

function formatItemsCount(count) {
  const mod10 = count % 10
  const mod100 = count % 100
  let word = 'предметов'
  if (mod10 === 1 && mod100 !== 11) word = 'предмет'
  else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) word = 'предмета'
  return `${count} ${word} в вашем списке`
}

/**
 * Страница сохранённых товаров
 */
export default function FavoritesPage() {
  const { favorites, count, clearFavorites } = useFavorites()

  return (
    <main className="max-w-7xl mx-auto w-full min-w-0 overflow-x-clip px-4 sm:px-6 lg:px-8 py-8">
      <nav aria-label="Хлебные крошки" className="mb-4 text-sm text-slate-400 dark:text-slate-500">
        <Link
          to={PATHS.home}
          className="hover:text-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm dark:hover:text-slate-200 dark:focus-visible:ring-slate-200"
        >
          Главная
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500 dark:text-slate-400">Избранное</span>
      </nav>

      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-50">
            Сохраненные товары
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">
            {formatItemsCount(count)}
          </p>
        </div>

        <button
          type="button"
          onClick={clearFavorites}
          disabled={count === 0}
          className="self-start text-sm font-medium text-slate-400 hover:text-slate-700 disabled:cursor-not-allowed disabled:hover:text-slate-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm dark:text-slate-400 dark:hover:text-slate-100 dark:disabled:hover:text-slate-400 dark:focus-visible:ring-slate-200"
        >
          Очистить список
        </button>
      </header>

      <ProductList
        products={favorites}
        emptyMessage="В списке пока нет сохранённых товаров."
        showCartAction
        className="lg:!grid-cols-3"
      />
    </main>
  )
}
