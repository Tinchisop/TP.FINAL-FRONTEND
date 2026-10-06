import { useEffect, useState } from 'react';
import MealList from './components/MealList.jsx';
import { searchMeals } from './services/mealApi.js';

function App() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    searchMeals().then(setRecetas);
  }, []);

  return (
    <>
      <h1>Recetario</h1>
      <MealList meals={recetas} />
    </>
  );
}

export default App;
