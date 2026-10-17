import { RouterProvider } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import { router } from './router/router.jsx'

function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  )
}

export default App
