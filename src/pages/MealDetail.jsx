import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMealById, getIngredients } from '../services/mealApi.js';
import styles from './MealDetail.module.css';

function MealDetail() {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    let cancelado = false;
    getMealById(id).then((resultado) => {
      if (!cancelado) setReceta(resultado);
    });
    return () => {
      cancelado = true;
    };
  }, [id]);

  if (!receta) return <p>Cargando receta...</p>;

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
