import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

/**
 * Общий каркас страниц: шапка + область контента текущего маршрута
 */
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col overflow-x-clip transition-colors duration-200 dark:bg-slate-950 dark:text-slate-50">
      <Header />
      <Outlet />
    </div>
  )
}
