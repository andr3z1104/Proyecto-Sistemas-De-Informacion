import styles from "./MiPerfil.module.css";
import userimg from "../../assets/usuarioimg.png";
import global from "../../Global.module.css";

import { logOut } from "../../Controllers/logout";
import { useState, useEffect } from "react";
import PopupInfo from "../../Components/Popup/PopupCerrarSesion";
import { useUser } from "../../Controllers/UserContext";
import { Link, useNavigate } from "react-router-dom";

function MiPerfil() {
  const { user } = useUser();
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/Registrarse");
    }
  }, [user, navigate]);

  const handleClick = async (e) => {
    logOut();
    setShowPopUp(true);
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  console.log("User data in MiPerfil:", user); // Añadir log para verificar los datos del usuario

  return (
    <div className={styles.contenedorPerfil}>
      <div className={styles.infoContacto}>
        <section className={styles.seccionDatos}>
          <div className={styles.seccionDatos_imagenUsuario}>
            <div className={styles.contenedorImagen}>
              <img src={userimg} alt="" />
            </div>
            <div
              className={`${styles.divider__colorBlanco} ${styles.divider}`}
            ></div>
            <div className={styles.funcionesAdmin}>
              <Link to="/EditarPerfil">
                <button
                  className={`${global.boton} ${styles.boton__colorNegro}`}
                >
                  Editar Perfil
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.seccionDatos_datosUsuario}>
            <div className={styles.contenedorTitulo}>
              <h2 className={styles.titulo}>Información de Contacto</h2>
              <p className={styles.idAdmin}></p>
            </div>
            <div
              className={`${styles.dividerInfoContacto} ${styles.divider}`}
            ></div>
            <div className={styles.camposInfo}>
              <div className={styles.label}>
                <p className={styles.input}>
                  {user.displayName || "Nombre no disponible"}
                </p>
              </div>
              <div className={styles.label}>
                <p className={styles.input}>{user.email}</p>
              </div>
              <div className={styles.label}>
                <p className={styles.input}>
                  {user.phone || user.phoneNumber || "Teléfono no disponible"}
                </p>
              </div>
              <div className={styles.label}>
                <p className={styles.input}>
                  {user.birthdate || "Fecha de nacimiento no disponible"}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.contenedorBoton}>
        <button
          className={`${global.boton} ${styles.boton}`}
          onClick={handleClick}
        >
          Cerrar Sesion
        </button>
        <button className={`${global.boton} ${styles.boton}`}>
          Eliminar Cuenta
        </button>
      </div>
      {showPopUp && <PopupInfo onClose={() => setShowPopUp(false)} />}
    </div>
  );
}

export default MiPerfil;
