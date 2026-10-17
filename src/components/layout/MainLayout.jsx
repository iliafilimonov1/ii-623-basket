import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

/**
 * Общий каркас страниц: шапка + область контента текущего маршрута
 */
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col overflow-x-clip">
      <Header />
      <Outlet />
    </div>
  )
}
