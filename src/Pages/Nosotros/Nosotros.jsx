import styles from './Nosotros.module.css';
import image1 from '../../assets/panaderia_nosotros.jpg';
import hands from '../../assets/manosyharina.png';
import { useNavigate } from "react-router-dom";

function Nosotros() {
    const navigate = useNavigate();

    return (
        <div className={styles.Nosotros}>

            <div className={styles.topContainer}>
                <div><img className="d-block w-100" src={image1} alt="imagen1" /> </div>
                <div className={styles.containerOverlay}></div>
                <div className={styles.containerCaption}>
                    <h3 className={styles.Text}>El sabor que te acompaña</h3>
                    <h3 className={styles.Text}>en cada estudio</h3>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.contenedorHistoria}>
                    <div className={styles.historiaContenido}>
                        <div className={styles.historia}>
                            <h1 className={styles.historiaTitulo}>Nuestra <span className={styles.historiaTitulo__dorado}>Historia</span></h1>
                            <p className={styles.historiaParrafo}>Los orígenes de Granier se establecen en la panadería de barrio, de ahí el arraigo de la marca al comercio de proximidad y al oficio de panadero. En 1988 se abrió el Horno la Estrella, horno predecesor de Granier. Un negocio que fue creciendo y a través del cuál se fueron abriendo nuevas panaderías, hasta convertirnos en expertos y contar con un modelo de negocio propio.
                            </p>
                        </div>
                        <div className={styles.contenedorImagen}>
                            <img src={hands} alt="manosconHarina" />
                        </div>
                    </div>
                </div>
            
                <div className={styles.contenedorMV}>
                    <div className={styles.MVContenido}>
                        <div className={styles.mision}>
                            <h2 className={styles.tituloMV}>Misión</h2>
                            <p className={styles.parrafoMV}>Buscamos hacer que tu paladar se delite con nuestros sabores, no solo mientras desayunas o tomas un snack sino también mientras te damos energía para seguir con el estudio. Granier busca estar más cerca de ti.</p>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.vision}>
                            <h2 className={styles.tituloMV}>Visión</h2>
                            <p className={styles.parrafoMV}>Queremos ser parte de tu recorrido mientras cumples tus metas en la Universidad. Una marca a la que puedas recurrir después de un mal día en semana 5 mientras te tomas algo o pides de comer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosotros;
