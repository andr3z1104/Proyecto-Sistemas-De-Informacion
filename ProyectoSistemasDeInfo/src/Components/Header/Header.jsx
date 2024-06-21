import styles from './Header.module.css';
import logo from '../../assets/LogoHeader.png';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <header className={styles.header}>
      <Link to="/Landing" className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <Link to="/Landing" className={styles.navItem}>Inicio</Link>
        <Link to="/Menu" className={styles.navItem}>Menú</Link>
        <Link to="/Nosotros" href="#nosotros" className={styles.navItem}>Nosotros</Link>
        <Link to="/InicioDeSesion" href="#acceder" className={styles.button}>Acceder</Link>
      </nav>
    </header>
  );
}

export default Header;