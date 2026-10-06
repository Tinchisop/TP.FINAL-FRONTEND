import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import MealList from '../components/MealList.jsx';
import StatusMessage from '../components/StatusMessage.jsx';
import { searchMeals } from '../services/mealApi.js';
import styles from './Home.module.css';

function Home() {
  const [busqueda, setBusqueda] = useState('');
  const [recetas, setRecetas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Busca mientras el usuario escribe, esperando 400 ms desde la última tecla
  useEffect(() => {
    let cancelado = false;

    const timer = setTimeout(async () => {
      setCargando(true);
      setError(null);
      try {
        const resultado = await searchMeals(busqueda.trim());
        if (!cancelado) setRecetas(resultado);
      } catch (err) {
        if (!cancelado) setError(err.message);
      } finally {
        if (!cancelado) setCargando(false);
      }
    }, 400);

    return () => {
      cancelado = true;
      clearTimeout(timer);
    };
  }, [busqueda]);

  let contenido;
  if (cargando) {
    contenido = <StatusMessage tipo="loading" mensaje="Cargando recetas..." />;
  } else if (error) {
    contenido = <StatusMessage tipo="error" mensaje={`No se pudieron cargar las recetas. ${error}`} />;
  } else if (recetas.length === 0) {
    contenido = <StatusMessage mensaje={`No encontramos recetas para "${busqueda}".`} />;
  } else {
    contenido = (
      <>
        <p className={styles.count}>
          {recetas.length} {recetas.length === 1 ? 'receta encontrada' : 'recetas encontradas'}
        </p>
        <MealList meals={recetas} />
      </>
    );
  }

  return (
    <>
      <section className={styles.hero}>
        <h1>Recetas de todo el mundo</h1>
        <p>Buscá tu próxima comida por nombre (en inglés, ej: chicken, pasta, cake).</p>
      </section>
      <SearchBar valor={busqueda} onCambio={setBusqueda} placeholder="Buscar receta..." />
      {contenido}
    </>
  );
}

export default Home;
