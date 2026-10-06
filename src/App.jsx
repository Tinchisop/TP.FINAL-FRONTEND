import { useEffect, useState } from 'react';
import MealList from './components/MealList.jsx';
import { searchMeals } from './services/mealApi.js';

function App() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    searchMeals().then(setRecetas);
  }, []);

  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>
      <h1>Recetario</h1>
      <MealList meals={recetas} />
    </main>
  );
}

export default App;
