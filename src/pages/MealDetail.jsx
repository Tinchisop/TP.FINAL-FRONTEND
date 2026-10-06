import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StatusMessage from '../components/StatusMessage.jsx';
import { getMealById, getIngredients } from '../services/mealApi.js';
import styles from './MealDetail.module.css';

function MealDetail() {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;

    async function cargarReceta() {
      setCargando(true);
      setError(null);
      try {
        const resultado = await getMealById(id);
        if (cancelado) return;
        if (!resultado) {
          setError('La receta que buscás no existe.');
        } else {
          setReceta(resultado);
        }
      } catch (err) {
        if (!cancelado) setError(`No se pudo cargar la receta. ${err.message}`);
      } finally {
        if (!cancelado) setCargando(false);
      }
    }

    cargarReceta();
    return () => {
      cancelado = true;
    };
  }, [id]);

  if (cargando) return <StatusMessage tipo="loading" mensaje="Cargando receta..." />;

  if (error) {
    return (
      <>
        <StatusMessage tipo="error" mensaje={error} />
        <Link to="/" className={styles.back}>← Volver al inicio</Link>
      </>
    );
  }

  const ingredientes = getIngredients(receta);
  const etiquetas = receta.strTags ? receta.strTags.split(',').filter(Boolean) : [];

  return (
    <article className={styles.detail}>
      <Link to="/" className={styles.back}>← Volver a las recetas</Link>

      <div className={styles.top}>
        <img className={styles.image} src={receta.strMealThumb} alt={receta.strMeal} />
        <div className={styles.info}>
          <h1>{receta.strMeal}</h1>
          <ul className={styles.meta}>
            <li><span>Categoría:</span> {receta.strCategory}</li>
            <li><span>Origen:</span> {receta.strArea}</li>
            <li><span>Ingredientes:</span> {ingredientes.length}</li>
          </ul>
          {etiquetas.length > 0 && (
            <div className={styles.tags}>
              {etiquetas.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
            </div>
          )}
          {receta.strYoutube && (
            <a className={styles.video} href={receta.strYoutube} target="_blank" rel="noreferrer">
              ▶ Ver video en YouTube
            </a>
          )}
        </div>
      </div>

      <section className={styles.section}>
        <h2>Ingredientes</h2>
        <ul className={styles.ingredients}>
          {ingredientes.map((ing, index) => (
            <li key={`${ing.name}-${index}`}>
              <strong>{ing.measure}</strong> {ing.name}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Preparación</h2>
        {receta.strInstructions
          .split(/\r?\n/)
          .filter((paso) => paso.trim())
          .map((paso, index) => <p key={index}>{paso}</p>)}
      </section>
    </article>
  );
}

export default MealDetail;
