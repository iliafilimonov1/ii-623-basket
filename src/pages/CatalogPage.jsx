import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../components/product/ProductList.jsx'
import { PRODUCT_CATEGORIES, getProductsByCategory } from '../data/products.js'
import { PATHS } from '../router/paths.js'

/**
 * Страница каталога товаров
 */
export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const visibleProducts = useMemo(
    () => getProductsByCategory(activeCategory),
    [activeCategory],
  )

  return (
    <main className="max-w-7xl mx-auto w-full min-w-0 overflow-x-clip px-4 sm:px-6 lg:px-8 py-8">
      <nav aria-label="Хлебные крошки" className="mb-4 text-sm text-slate-400">
        <Link
          to={PATHS.home}
          className="hover:text-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm"
        >
          Главная
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500">Каталог</span>
      </nav>

      <header className="max-w-2xl mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Каталог товаров
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
          Откройте для себя нашу эксклюзивную коллекцию предметов интерьера. Каждое
          изделие отобрано вручную для создания гармонии и уюта в вашем современном
          доме.
        </p>
      </header>

      <div className="mb-8 flex w-full min-w-0 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-wrap items-center gap-2" role="tablist" aria-label="Категории товаров">
          {PRODUCT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M6 12h12M10 20h4" />
            </svg>
            Фильтры
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h12M3 12h8M3 17h16M17 7l4 4m0-4-4 4" />
            </svg>
            Сортировка
            <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <div className="flex items-center rounded-full border border-slate-200 bg-white p-1">
            <button
              type="button"
              aria-label="Сетка"
              aria-pressed={viewMode === 'grid'}
              onClick={() => setViewMode('grid')}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                viewMode === 'grid' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Список"
              aria-pressed={viewMode === 'list'}
              onClick={() => setViewMode('list')}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                viewMode === 'list' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <ProductList
        products={visibleProducts}
        className={viewMode === 'list' ? '!grid-cols-1 md:!grid-cols-2 lg:!grid-cols-2' : ''}
      />
    </main>
  )
}
