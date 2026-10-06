import { Link } from 'react-router-dom';
import styles from './MealCard.module.css';

// Card reutilizable con los datos principales de una receta
function MealCard({ id, titulo, imagen, categoria, origen, etiquetas }) {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={`${imagen}/medium`} alt={titulo} loading="lazy" />
      <div className={styles.body}>
        <h3 className={styles.title}>{titulo}</h3>
        <ul className={styles.meta}>
          <li><span>Categoría:</span> {categoria}</li>
          <li><span>Origen:</span> {origen}</li>
        </ul>
        {etiquetas.length > 0 && (
          <div className={styles.tags}>
            {etiquetas.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        <Link to={`/receta/${id}`} className={styles.button}>
          Ver receta
        </Link>
      </div>
    </article>
  );
}

export default MealCard;
