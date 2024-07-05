import styles from "./PopupPedidoProceso.module.css"
import global from "../../Global.module.css"

function PopupInfo() {
return (
    
    <div className={styles.fondoNegro}>
        <div className={global.contenedor}>
            <div className={styles.popup}>
                <div className={styles.contenedorImagen}>
                    <div className={styles.popupImagen}>
                    </div>
                </div>
                <div className={styles.popupInfo}>
                    <h1 className={styles.popupInfo_titulo}>Ya te echamos de menos</h1>
                    <div className={styles.popupInfo_bienvenido}>
                        <p className={styles.bienvenido}>¡Vuelve Pronto!</p>
                        <button className={`${styles.botonContinuar} ${global.boton}`}>Continuar</button>
                    </div>



                </div>
            </div>
        </div>
        

    </div>

    


);
}

export default PopupInfo;
