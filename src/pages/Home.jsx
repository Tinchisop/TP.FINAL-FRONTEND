import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import MealList from '../components/MealList.jsx';
import { searchMeals } from '../services/mealApi.js';
import styles from './Home.module.css';

function Home() {
  const [busqueda, setBusqueda] = useState('');
  const [recetas, setRecetas] = useState([]);

  // Busca mientras el usuario escribe, esperando 400 ms desde la última tecla
  useEffect(() => {
    let cancelado = false;

    const timer = setTimeout(() => {
      searchMeals(busqueda.trim()).then((resultado) => {
        if (!cancelado) setRecetas(resultado);
      });
    }, 400);

    return () => {
      cancelado = true;
      clearTimeout(timer);
    };
  }, [busqueda]);

  return (
    <>
      <section className={styles.hero}>
        <h1>Recetas de todo el mundo</h1>
        <p>Buscá tu próxima comida por nombre (en inglés, ej: chicken, pasta, cake).</p>
      </section>
      <SearchBar valor={busqueda} onCambio={setBusqueda} placeholder="Buscar receta..." />
      <p className={styles.count}>
        {recetas.length} {recetas.length === 1 ? 'receta encontrada' : 'recetas encontradas'}
      </p>
      <MealList meals={recetas} />
    </>
  );
}

export default Home;
