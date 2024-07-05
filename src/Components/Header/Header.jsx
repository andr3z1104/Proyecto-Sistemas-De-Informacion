import styles from './Header.module.css';
import logo from '../../assets/LogoHeader.png';
import pfp from '../../assets/FotoPerfil.png';
import { Link } from 'react-router-dom';
import global from "../../Global.module.css";
import { useUser } from '../../Controllers/UserContext';

function Header({ showLoginButton }) {

  const user = useUser();
  
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <div className={styles.parte1}>
          <Link to="/" className={styles.navItem}>Inicio</Link>

          {
            /* 
              Utilizare la redireccion del menu para la pagina de mi perfil, solo para mostrar. Debido a que no existe el botoncito 
              original code: <a href="/Menu" className={styles.navItem} onClick={onClick}>Menú</a>
              code to acceder Gestionar perfil: <a href="/MiPerfil" className={styles.navItem}>Menú</a>
            */
          }

          <a href="/Menu" className={styles.navItem}>Menú</a>
          <a href="/Nosotros" className={styles.navItem}>Nosotros</a>
        </div>
        <div className={styles.parte2}>
          {showLoginButton && user === null && (
            <Link to="/InicioDeSesion" href="#acceder" className={`${styles.button} ${global.boton}`}>Acceder</Link>
          )}
          {user !== null && <img src={pfp} alt="" />}
        </div>
      </nav>
    </header>
  );
}

export default Header;