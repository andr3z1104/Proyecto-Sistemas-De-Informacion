import styles from "./PopupInfo.module.css";
import global from "../../Global.module.css";

function PopupInfo({ onClose }) {
    const handleClick = () => {
        onClose();
    };

    return (
        <div className={styles.fondoNegro}>
            <div className={global.contenedor}>
                <div className={styles.popup}>
                    <div className={styles.contenedorImagen}>
                        <div className={styles.popupImagen}></div>
                    </div>
                    <div className={styles.popupInfo}>
                        <h1 className={styles.popupInfo_titulo}>¡Comentario Enviado!</h1>
                        <div className={styles.popupInfo_bienvenido}>
                            <p className={styles.bienvenido}>Apreciamos tu opinión</p>
                            <button className={`${styles.botonContinuar} ${global.boton}`} onClick={handleClick}>Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupInfo;
