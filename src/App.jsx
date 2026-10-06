import { useEffect, useState } from 'react';
import { searchMeals } from './services/mealApi.js';

function App() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    searchMeals().then(setRecetas);
  }, []);

  return (
    <>
      <h1>Recetario</h1>
      <ul>
        {recetas.map((receta) => (
          <li key={receta.idMeal}>{receta.strMeal}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
