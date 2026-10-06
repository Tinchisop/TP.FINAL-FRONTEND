import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <section className={styles.notFound}>
      <span className={styles.emoji} aria-hidden="true">🍳</span>
      <h1>404</h1>
      <p>Ups... esta página se quemó. No encontramos lo que buscabas.</p>
      <Link to="/" className={styles.button}>Volver al inicio</Link>
    </section>
  );
}

export default NotFound;
