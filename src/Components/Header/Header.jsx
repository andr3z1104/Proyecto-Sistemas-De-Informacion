import styles from "./Header.module.css";
import logo from "../../assets/LogoHeader.png";
import pfp from "../../assets/FotoPerfil.png";
import { Link, useNavigate } from "react-router-dom";
import global from "../../Global.module.css";
import { useUser } from "../../Controllers/UserContext";

function Header({ showLoginButton }) {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (user?.email === "admin@granierunimet.com") {
      navigate("/AdminPerfil");
    } else {
      navigate("/MiPerfil");
    }
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <div className={styles.parte1}>
          <Link to="/" className={styles.navItem}>
            Inicio
          </Link>
          <Link to="/Menu" className={styles.navItem}>
            Menú
          </Link>
          <Link to="/Nosotros" className={styles.navItem}>
            Nosotros
          </Link>
        </div>
        <div className={styles.parte2}>
          {showLoginButton && !user && (
            <Link
              to="/InicioDeSesion"
              className={`${styles.button} ${global.boton}`}
            >
              Acceder
            </Link>
          )}
          {user && (
            <img
              className={styles.cursorPointer}
              src={pfp}
              alt="Foto de perfil"
              onClick={handleClick}
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
