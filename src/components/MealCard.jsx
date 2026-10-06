import { Link } from 'react-router-dom';
import styles from './MealCard.module.css';

// Card reutilizable con los datos principales de una receta
function MealCard({ id, titulo, imagen, categoria, origen, etiquetas, orden = 0 }) {
  return (
    <article className={styles.card} style={{ '--orden': orden }}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={`${imagen}/medium`} alt={titulo} loading="lazy" />
        <span className={styles.badge}>{categoria}</span>
      </div>
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
          Ver receta <span className={styles.arrow} aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default MealCard;
