import styles from './Footer.module.css';

function Footer({ texto }) {
  return (
    <footer className={styles.footer}>
      <p>{texto}</p>
    </footer>
  );
}

export default Footer;
