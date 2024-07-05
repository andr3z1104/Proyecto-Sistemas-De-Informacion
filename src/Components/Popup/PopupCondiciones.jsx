import styles from "./PopupCondiciones.module.css";
import global from "../../Global.module.css";

function PopupCondiciones({ onClose }) {
    const handleClick = () => {
        onClose();
    };

    return (
        <div className={styles.fondoNegro}>
            <div className={styles.popup}>
                < div className={styles.popupInfo}>
                    <h1 className={styles.popupInfo_titulo}>Condiciones de Uso</h1>

                    <p className={styles.parrafo}>
                        Bienvenido a la página web de Granier. Al acceder y utilizar nuestro sitio web, usted acepta cumplir con las siguientes condiciones de uso. Al ingresar a nuestro sitio, declara que tiene al menos 18 años de edad o que accede bajo la supervisión de un padre o tutor legal. Usted se compromete a utilizar este sitio de manera responsable y conforme a la ley. Queda prohibido el uso del sitio para realizar actividades fraudulentas o ilegales. Granier se reserva el derecho de modificar estos términos en cualquier momento sin previo aviso. Es su responsabilidad revisar regularmente las condiciones de uso para estar informado de cualquier cambio. Al continuar usando nuestro sitio después de la publicación de modificaciones, usted acepta dichas modificaciones. Todos los contenidos de este sitio, incluyendo texto, imágenes y gráficos, son propiedad de Granier y están protegidos por las leyes de derechos de autor. No se permite la reproducción, distribución o explotación comercial de cualquier contenido sin el consentimiento previo por escrito de Granier. Nos esforzamos por mantener la información en nuestro sitio web actualizada y precisa; sin embargo, no garantizamos la exactitud, integridad o actualidad de la información proporcionada. Al utilizar nuestro sitio, usted acepta que Granier no será responsable de cualquier daño o pérdida que surja del uso de nuestro sitio o de la información contenida en él. Si tiene alguna pregunta o inquietud sobre estas condiciones de uso, por favor, póngase en contacto con nosotros.
                    </p>
                    

                    <div className={styles.contenedorBoton}>
                        <button className={`${styles.botonRegresar} ${global.boton}`} onClick={handleClick}>Regresar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupCondiciones;
