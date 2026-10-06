import styles from './Pagination.module.css';

function Pagination({ paginaActual, totalPaginas, onCambiarPagina }) {
  if (totalPaginas <= 1) return null;

  return (
    <nav className={styles.pagination} aria-label="Paginado">
      <button
        className={styles.button}
        onClick={() => onCambiarPagina(paginaActual - 1)}
        disabled={paginaActual === 1}
      >
        ← Anterior
      </button>
      <span className={styles.info}>
        Página {paginaActual} de {totalPaginas}
      </span>
      <button
        className={styles.button}
        onClick={() => onCambiarPagina(paginaActual + 1)}
        disabled={paginaActual === totalPaginas}
      >
        Siguiente →
      </button>
    </nav>
  );
}

export default Pagination;
