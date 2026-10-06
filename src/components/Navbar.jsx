import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar({ titulo, opciones }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <span aria-hidden="true">🍲</span> {titulo}
        </Link>
        <ul className={styles.menu}>
          {opciones.map((opcion) => (
            <li key={opcion.nombre}>
              <NavLink
                to={opcion.url}
                className={({ isActive }) => (isActive ? styles.active : styles.link)}
              >
                {opcion.nombre}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
