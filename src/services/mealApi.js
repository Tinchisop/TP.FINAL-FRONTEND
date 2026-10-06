// Llamadas a la API de TheMealDB (https://www.themealdb.com/api.php)
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Busca recetas por nombre. Si el texto está vacío trae un listado general
export async function searchMeals(query = '') {
  const response = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error(`Error ${response.status} al consultar la API`);
  }
  const data = await response.json();
  return data.meals ?? [];
}
