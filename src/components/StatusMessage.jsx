import styles from './StatusMessage.module.css';

// Mensaje para los estados de carga, error o sin resultados
function StatusMessage({ tipo = 'info', mensaje }) {
  return (
    <div className={`${styles.message} ${styles[tipo]}`} role={tipo === 'error' ? 'alert' : 'status'}>
      {tipo === 'loading' && <span className={styles.spinner} aria-hidden="true" />}
      <p>{mensaje}</p>
    </div>
  );
}

export default StatusMessage;
