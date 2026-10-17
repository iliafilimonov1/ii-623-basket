import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../data/products.js'
import { PATHS } from '../router/paths.js'

/**
 * Страница детальной информации о товаре.
 * Сейчас это каркас маршрута: сюда позже добавится полная карточка товара.
 */
export default function ProductPage() {
  const { productId } = useParams()
  const product = getProductById(productId)

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Товар не найден</h1>
        <Link
          to={PATHS.catalog}
          className="mt-4 inline-flex text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50"
        >
          Вернуться в каталог
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav aria-label="Хлебные крошки" className="mb-4 text-sm text-slate-400 dark:text-slate-500">
        <Link to={PATHS.home} className="hover:text-slate-700 transition-colors dark:hover:text-slate-200">Главная</Link>
        <span className="mx-2">/</span>
        <Link to={PATHS.catalog} className="hover:text-slate-700 transition-colors dark:hover:text-slate-200">Каталог</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-500 dark:text-slate-400">{product.title}</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-50">
        {product.title}
      </h1>
      <p className="mt-3 text-slate-500 dark:text-slate-400">
        Страница товара готова к наполнению детальной информацией.
      </p>
    </main>
  )
}
