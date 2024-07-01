import styles from './Nosotros.module.css';
import bakeryBG from '../../assets/panaderia_nosotros.jpg';
import hands from '../../assets/manosyharina.png';
import { useNavigate } from "react-router-dom";

function Nosotros() {
    const navigate = useNavigate();

    return (
        <div className={styles.Nosotros}>

            <div className={styles.firstBackground}>
                <img src={bakeryBG} alt="Logo" className={styles.bakeryphoto} />
                <p className={styles.textOn}>El sabor que te acompaña en cada estudio</p>
            </div>

            <div className={styles.secondBackground}>

                <div className={styles.minibox}>
                    
                    <h2 className={styles.minititle}>Nuestra <span className={styles.sp}>Historia</span></h2>
                    <p className={styles.textBox}>
                        Los orígenes de Granier se establecen en la panadería de barrio, de ahí el arraigo de la marca al comercio de proximidad y al oficio de panadero. En 1988 se abrió el Horno la Estrella, horno predecesor de Granier. Un negocio que fue creciendo y a través del cuál se fueron abriendo nuevas panaderías, hasta convertirnos en expertos y contar con un modelo de negocio propio.
                    </p>

                </div>

                <img src={hands} alt="manos con harina" className={styles.handsphoto} />
            
            </div>

            <div className={styles.thirdBackground}>
                <div className={styles.misionContainer}>
                    <h2 className={styles.headerStyle}>Mision</h2>
                    <p className={styles.textfield}>Buscamos hacer que tu paladar se delite con nuestros sabores, no solo mientras desayunas o tomas un snack sino también mientras te damos energía para seguir con el estudio. Granier busca estar más cerca de ti.</p>
                </div>
                <div className={styles.visionContainer}>
                    <h2 className={styles.headerStyle}>Vision</h2>
                    <p className={styles.textfield}>Queremos ser parte de tu recorrido mientras cumples tus metas en la Universidad. Una marca a la que puedas recurrir después de un mal día en semana 5 mientras te tomas algo o pides de comer. </p>
                    <hr />
                </div>

            </div>
        </div>
    )
}

export default Nosotros;
