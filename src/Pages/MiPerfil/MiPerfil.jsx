import styles from './MiPerfil.module.css';
import userimg from '../../assets/usuarioimg.png';

import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';

function MiPerfil() {
    let usuario = "Angelo";
    let nombre = "Angelo";
    let apellido = "Guerrero";
    let correo = "g.angelo@correo.unimet.edu.ve";
    let fecha_nac = "23/10/2002";
    let tlf = "04126881813";


    return (
        <>
            <h1 className={styles.welcomeTitle}>Bienvenido "{usuario}"</h1>
            
            <div className={styles.MiPerfil}>

                <div className={styles.bigContainer}>

                    <div className={styles.imageC}>
                        <img className={styles.userimg} src={userimg} alt="" />
                    </div>

                    <div className={styles.contenedorDatos}>

                        <div className={styles.firstROW}>
                            <h3>Nombre: {nombre}</h3>
                            <h3>Apellido: {apellido}</h3>
                        </div>

                        <div className={styles.secondROW}>
                            <h3>Correo: {correo}</h3>
                        </div>

                        <div className={styles.thirdROW}>
                            <h3>Fecha Nacimiento: {fecha_nac}</h3>
                            <button>Editar</button>
                        </div>

                    </div>

                </div>

                <div className={styles.secondBigContainer}>
                    
                    <div className={styles.contactROW}>
                        <h2>Contacto</h2>
                        <h3>Teléfono: {tlf}</h3>
                    </div>

                </div>

                <div className={styles.thirdBigContainer}>
                    
                    <div className={styles.PreferencesROW}>
                        
                        <h2>Preferencias</h2>
                        <div className={styles.carruselPrototype}>
                            <div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <button>Eliminar Cuenta</button>
                    <button>Cerrar Sesion</button>
                </div>
            </div>
        </>
    )
}

export default MiPerfil;