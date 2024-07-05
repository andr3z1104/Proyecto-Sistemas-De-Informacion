import styles from './MiPerfil.module.css';
import userimg from '../../assets/usuarioimg.png';
import global from "../../Global.module.css"

import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import { logOut } from '../../Controllers/logout';
import { useState } from 'react';
import PopupInfo from '../../Components/Popup/PopupCerrarSesion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Controllers/UserContext';

function MiPerfil() {

    const navigate = useNavigate();
    const user = useUser();
    const handleEdit =  async (e) => {
        e.preventDefault();
        if (user?.email == 'admin@granierunimet.com'){
            navigate('/AdminPerfil');
        }else{
            navigate('/EditarMiPerfil');
        }
        }

    const nombre = "Angelo";
    const apellido = "Guerrero";
    const correo = "g.angelo@correo.unimet.edu.ve";
    const telefono = "04126881813";

    const [showPopUp, setShowPopUp] = useState(false);

    const handleClick = async (e) => {
        logOut();
        setShowPopUp(true);
    }

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
                            <button className={`${global.boton} ${styles.boton__colorNegro}`} onClick={handleEdit}>Editar Perfil</button>
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
                        </div>
                    </div>

                </section>
            </div>
            

            <div className={styles.contenedorBoton}>
                <button className={`${global.boton} ${styles.boton}`} onClick={handleClick} >Cerrar Sesion</button>
            </div>
            {showPopUp && <PopupInfo onClose={() => setShowPopUp(false)} />}
        </div>






            


                    


                            
                     
                            
                  
                
            
        
    )
}

export default MiPerfil;

