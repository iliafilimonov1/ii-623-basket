/**
 * Единый справочник путей приложения.
 * Динамические маршруты задаются функциями, чтобы страницы товара
 * можно было наращивать без правок в шапке и списках.
 */
export const PATHS = {
  home: '/',
  catalog: '/catalog',
  product: (productId) => `/catalog/${productId}`,
  productPattern: '/catalog/:productId',
  favorites: '/favorites',
  promotions: '/promotions',
  help: '/help',
}
