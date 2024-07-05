import styles from './MiPerfil.module.css';
import userimg from '../../assets/usuarioimg.png';
import global from "../../Global.module.css"

import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';

function MiPerfil() {
    let usuario = "Angelo";
    let nombre = "Angelo";
    let apellido = "Guerrero";
    let correo = "g.angelo@correo.unimet.edu.ve";
    let fechaNacimiento = "23/10/2002";
    let telefono = "04126881813";


    return (
        
        <div className={styles.contenedorPerfil}>
            <div className={styles.infoContacto}>
                <section className={styles.seccionDatos}>
                    <div className={styles.seccionDatos_imagenUsuario}>
                        <div className={styles.contenedorImagen}>
                            <img src={userimg} alt="" />
                        </div>
                        <div className={`${styles.divider__colorBlanco} ${styles.divider}`}></div>
                        <div className={styles.funcionesAdmin}>
                            <button className={`${global.boton} ${styles.boton__colorNegro}`} >Editar Perfil</button>
                        </div>
                    </div>
                    <div className={styles.seccionDatos_datosUsuario}>
                        <div className={styles.contenedorTitulo}>
                            <h2 className={styles.titulo}>Información de Contacto</h2>
                            <p className={styles.idAdmin}></p>
                        </div>
                        <div className={`${styles.dividerInfoContacto} ${styles.divider}`}></div>
                        <div className={styles.camposInfo}>
                            <div className={styles.label}>
                                <p className={styles.input}> {nombre} </p>
                            </div>
                            <div className={styles.label}>
                                <p className={styles.input}>{apellido}</p>
                            </div>
                            <div className={styles.label}>
                                <p className={styles.input}>{correo}</p>
                            </div>
                            <div className={styles.label}>
                                <p className={styles.input}>{telefono}</p>
                            </div>
                            <div className={styles.label}>
                                <p className={styles.input}>{fechaNacimiento}</p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            

            <div className={styles.contenedorBoton}>
                <button className={`${global.boton} ${styles.boton}`}>Cerrar Sesion</button>
                <button className={`${global.boton} ${styles.boton}`}>Eliminar Cuenta</button>
            </div>

        </div>






            


                    


                            
                     
                            
                  
                
            
        
    )
}

export default MiPerfil;

