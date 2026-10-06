import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import styles from './Layout.module.css';

const opciones = [
  { nombre: 'Inicio', url: '/' },
];

function Layout() {
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
