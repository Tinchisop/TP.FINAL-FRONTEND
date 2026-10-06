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

// Trae una receta por su id. Devuelve null si no existe
export async function getMealById(id) {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${encodeURIComponent(id)}`);
  if (!response.ok) {
    throw new Error(`Error ${response.status} al consultar la API`);
  }
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
}

// La API manda los ingredientes en campos sueltos (strIngredient1..20 y strMeasure1..20).
// Los junto en un array para poder recorrerlos con map
export function getIngredients(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    if (name && name.trim()) {
      ingredients.push({ name: name.trim(), measure: meal[`strMeasure${i}`]?.trim() ?? '' });
    }
  }
  return ingredients;
}
