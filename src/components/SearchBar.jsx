import styles from './SearchBar.module.css';

// Input controlado: el valor y el cambio vienen del componente padre
function SearchBar({ valor, onCambio, placeholder }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon} aria-hidden="true">🔍</span>
      <input
        type="search"
        className={styles.input}
        value={valor}
        onChange={(e) => onCambio(e.target.value)}
        placeholder={placeholder}
        aria-label="Buscar recetas"
      />
    </div>
  );
}

export default SearchBar;
