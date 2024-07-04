import styles from './HeaderIS.module.css';
import logo from '../../assets/LogoHeader.png';
import FotoPerfil from '../../assets/FotoPerfil.png';
import { Link } from 'react-router-dom';
import global from "../../Global.module.css";

function HeaderIS({ showLoginButton }) {

    return (
    <header className={styles.header}>
        <Link to="/" className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
        <div className={styles.parte1}>
            <Link to="/" className={styles.navItem}>Inicio</Link>

            <a href="/Menu" className={styles.navItem}>Menú</a>
            <a href="/Nosotros" className={styles.navItem}>Nosotros</a>
        </div>
        <div className={styles.parte2}>
            <img src={FotoPerfil} alt="" />
        </div>
        </nav>
    </header>
    );
}

export default HeaderIS;