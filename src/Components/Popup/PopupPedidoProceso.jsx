import styles from "./PopupPedidoProceso.module.css"
import global from "../../Global.module.css"

function PopupInfo({onClose}) {

    const handleClick = () => {
        onClose();
    };

return (
    
    <div className={styles.fondoNegro}>
        <div className={global.contenedor}>
            <div className={styles.popup}>
                <div className={styles.contenedorImagen}>
                    <div className={styles.popupImagen}>
                    </div>
                </div>
                <div className={styles.popupInfo}>
                    <h1 className={styles.popupInfo_titulo}>Pedido Registrado</h1>
                    <div className={styles.popupInfo_bienvenido}>
                        <p className={styles.bienvenido}>¡Gracias por tu compra!</p>
                        <button className={`${styles.botonContinuar} ${global.boton}`} onClick={handleClick}>Continuar</button>
                    </div>



                </div>
            </div>
        </div>
        

    </div>

    


);
}

export default PopupInfo;
