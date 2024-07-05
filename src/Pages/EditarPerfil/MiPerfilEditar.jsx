import styles from './MiPerfilEditar.module.css';
import userimg from '../../assets/usuarioimg.png';
import global from "../../Global.module.css";

import { logOut } from '../../Controllers/logout';
import { useState } from 'react';
import PopupInfo from '../../Components/Popup/PopupCerrarSesion';

function MiPerfil() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") setName(value);
        if (name === "lastname") setLastName(value);
        if (name === "phone") setPhone(value);
    };

    const handleSaveChanges = () => {
        const userConfirmed = window.confirm("¿Deseas guardar los cambios?");
        if (userConfirmed) {
            // Lógica para guardar los cambios
            console.log("Cambios guardados");
        } else {
            console.log("Cambios descartados");
        }
    };

    const handleExitEditing = () => {
        const userConfirmed = window.confirm("¿Deseas salir de la edición sin guardar los cambios?");
        if (userConfirmed) {
            // Lógica para salir de la edición
            console.log("Saliste de la edición");
        } else {
            console.log("Continuas en la edición");
        }
    };

    let nombre = "Angelo";
    let apellido = "Guerrero";
    let correo = "g.angelo@correo.unimet.edu.ve";
    let telefono = "04126881813";

    const [showPopUp, setShowPopUp] = useState(false);

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
                            <button 
                                className={`${global.boton} ${styles.boton__colorNegro}`} 
                                onClick={handleExitEditing}
                            >
                                Salir de Edición
                            </button>
                        </div>
                    </div>
                    <div className={styles.seccionDatos_datosUsuario}>
                        <div className={styles.contenedorTitulo}>
                            <h2 className={styles.titulo}> Editar -- Información de Contacto</h2>
                            <p className={styles.idAdmin}></p>
                        </div>
                        <div className={`${styles.dividerInfoContacto} ${styles.divider}`}></div>
                        <div className={styles.camposInfo}>
                            <div className={styles.label}>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={name} 
                                    onChange={handleInputChange} 
                                    className={styles.input} 
                                    placeholder={nombre}
                                />
                            </div>
                            <div className={styles.label}>
                                <input 
                                    type="text" 
                                    name="lastname" 
                                    value={lastName} 
                                    onChange={handleInputChange} 
                                    className={styles.input} 
                                    placeholder={apellido}
                                />
                            </div>
                            <div className={styles.label}>
                                <input 
                                    type="text" 
                                    name="email" 
                                    value={email} 
                                    onChange={handleInputChange} 
                                    className={styles.input} 
                                    placeholder={correo}
                                />
                            </div>
                            <div className={styles.label}>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    value={phone} 
                                    onChange={handleInputChange} 
                                    className={styles.input} 
                                    placeholder={telefono}
                                />
                            </div>
                        </div>
                        <div className={styles.contenedorBoton}>
                            <button 
                                className={global.boton} 
                                onClick={handleSaveChanges}
                            >
                                Guardar Cambios
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {showPopUp && <PopupInfo onClose={() => setShowPopUp(false)} />}
        </div>
    );
}

export default MiPerfil;
