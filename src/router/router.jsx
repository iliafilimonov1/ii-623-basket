import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout.jsx'
import CatalogPage from '../pages/CatalogPage.jsx'
import FavoritesPage from '../pages/FavoritesPage.jsx'
import HomePage from '../pages/HomePage.jsx'
import PlaceholderPage from '../pages/PlaceholderPage.jsx'
import ProductPage from '../pages/ProductPage.jsx'
import { PATHS } from './paths.js'

/**
 * Таблица маршрутов.
 * Новые страницы (товар, оформление заказа, избранное) добавляются
 * одним объектом в children — без правок в Header и MainLayout.
 */
export const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'catalog',
        element: <CatalogPage />,
      },
      {
        path: 'catalog/:productId',
        element: <ProductPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
      {
        path: 'promotions',
        element: <PlaceholderPage title="Акции" />,
      },
      {
        path: 'help',
        element: <PlaceholderPage title="Помощь" />,
      },
    ],
  },
])
