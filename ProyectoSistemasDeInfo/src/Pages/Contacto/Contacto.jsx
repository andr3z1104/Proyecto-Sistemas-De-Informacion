import styles from './Contacto.module.css';
import image1 from '../../assets/Imagen Principal.png';
import { useNavigate } from 'react-router-dom';
import whatsapp from '../../assets/WhatsappLogo.png'
import instagram from '../../assets/InstagramLogo.png'

function Contacto() {
    const navigate = useNavigate();
    return (
        <div className='Contacto'>
            <div className={styles.topContainer}>
                <div><img className={styles.fotaca} src={image1} alt="imagen1" /></div>
                <div className={styles.containerOverlay}></div>
                <div className={styles.containerCaption}>
                    <h3 className={styles.Text}>Estamos a tu alcance, no te quedes</h3>
                    <h3 className={styles.Text}>sin probar un pedacito de Granier</h3>
                    <button className={styles.navButton} onClick={() => navigate('/Nosotros')}>CONÓCENOS</button>
                </div>
            </div>

            <div className={styles.contactContainer}>
                <div className={styles.spacer}>
                    <div className={styles.contact}>
                        <h2>CONTÁCTANOS</h2>
                        <div className={styles.group}>
                            <img src={whatsapp} alt="Logo" className={styles.image} />
                            <p className={styles.desc}> 424-2086718</p>
                        </div>
                        <div className={styles.group}>
                            <img src={instagram} alt="Logo" className={styles.image} />
                            <a href='https://www.instagram.com/graniervzla?igsh=MXZ3Nm04N2VoZ3Z3Ng==' className={styles.desc}> @granier_unimet</a>
                        </div>
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.visit}>
                        <h2>VISÍTANOS</h2>
                        <p className={styles.unrDesc}>Sede Unimet. Encuéntranos en la Universidad Metropolitana de Caracas. Justo al lado del Edificio Corimon.</p>
                        <p className={styles.unrDesc}>De Lunes a Viernes. Desde las 7:00am hasta las 7:00pm</p>
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.feedback}>
                        <h2>DUDAS U OPINIONES</h2>
                        <p className={styles.unrDesc}>Nos importa saber cómo podemos mejorar tu experiencia Granier. Recuerda que somos el sabor que te acompaña en cada estudio.</p>
                        <div className={styles.sSpace}>
                            <button className={styles.navButton} onClick={() => navigate('/Comentarios')}>COMENTARIOS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
