import { RouterProvider } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { router } from './router/router.jsx'

function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </ThemeProvider>
  )
}

export default App
