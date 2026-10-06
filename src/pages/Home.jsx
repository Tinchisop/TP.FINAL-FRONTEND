import { useEffect, useState } from 'react';
import MealList from '../components/MealList.jsx';
import { searchMeals } from '../services/mealApi.js';
import styles from './Home.module.css';

function Home() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    searchMeals().then(setRecetas);
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <h1>Recetas de todo el mundo</h1>
        <p>Descubrí tu próxima comida.</p>
      </section>
      <MealList meals={recetas} />
    </>
  );
}

export default Home;
