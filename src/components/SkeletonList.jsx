import listStyles from './MealList.module.css';
import styles from './SkeletonList.module.css';

// Cards "fantasma" que se muestran mientras llegan las recetas de la API
function SkeletonList({ cantidad = 8 }) {
  return (
    <section className={listStyles.grid} aria-label="Cargando recetas" aria-busy="true">
      {Array.from({ length: cantidad }, (_, index) => (
        <div key={index} className={styles.card}>
          <div className={`${styles.shimmer} ${styles.image}`} />
          <div className={styles.body}>
            <div className={`${styles.shimmer} ${styles.title}`} />
            <div className={`${styles.shimmer} ${styles.line}`} />
            <div className={`${styles.shimmer} ${styles.line} ${styles.short}`} />
            <div className={`${styles.shimmer} ${styles.button}`} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default SkeletonList;
