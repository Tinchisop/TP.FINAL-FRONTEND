import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import styles from './Layout.module.css';

const opciones = [
  { nombre: 'Inicio', url: '/' },
];

function Layout() {
  const location = useLocation();

  // Cada vez que se navega a otra página, la vista vuelve arriba de todo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.key]);

  return (
    <div className={styles.layout}>
      <Navbar titulo="Recetario" opciones={opciones} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer texto="Datos provistos por TheMealDB · Trabajo Práctico Final UTN" />
    </div>
  );
}

export default Layout;
