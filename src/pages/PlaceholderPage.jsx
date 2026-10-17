import { useLocation } from 'react-router-dom'

/**
 * Временная заглушка для маршрутов, которые появятся позже
 */
export default function PlaceholderPage({ title, description }) {
  const location = useLocation()

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-50">
        {title}
      </h1>
      <p className="mt-3 text-slate-500 dark:text-slate-400">
        {description || `Раздел «${location.pathname}» будет добавлен позже.`}
      </p>
    </main>
  )
}
