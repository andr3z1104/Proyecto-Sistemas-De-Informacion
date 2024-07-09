import styles from "./MiPerfilAdmin.module.css";
import global from "../../Global.module.css";
import imagenUsuario from "../../assets/usuarioimg.png";
import imagenCualquiera from "../../assets/NotAvailable.png";
import { MdStayCurrentLandscape } from "react-icons/md";
import { logOut } from "../../Controllers/logout";
import PopupInfo from '../../Components/Popup/PopupCerrarSesion'; 
import FichaComentario from '../../Components/FichaComentario/FichaComentario'; // Importar FichaComentario
import { useState, useEffect } from "react";
import { useUser } from "../../Controllers/UserContext";
import { db } from '../../credenciales'; // Importar la base de datos
import { collection, getDocs } from "firebase/firestore"; // Importar métodos de Firestore

function MiPerfilAdmin() {
    const { user } = useUser();
    const [showPopUp, setShowPopUp] = useState(false);
    const [clientesIngresados, setClientesIngresados] = useState(0);

    useEffect(() => {
        const fetchUserCount = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            setClientesIngresados(querySnapshot.size);
        };
        fetchUserCount();
    }, []);

    const handleClick = async (e) => {
        logOut();
        setShowPopUp(true);
    }

    const handleButtonClick = async (e) =>{
        e.preventDefault();
        alert("Lo sentimos, esta página se encuentra en construcción 🚧")
    }

    return (
        <div className={styles.contenedorPerfil}>
            <div className={styles.infoContacto}>
                <section className={styles.seccionDatos}>
                    <div className={styles.seccionDatos_imagenUsuario}>
                        <div className={styles.contenedorImagen}>
                            <img src={imagenUsuario} alt="" />
                        </div>
                        <div className={`${styles.divider__colorBlanco} ${styles.divider}`}></div>
                        <div className={styles.funcionesAdmin}>
                            <button className={`${global.boton} ${styles.boton__colorNegro}`} onClick={handleButtonClick}>Gestionar Menú</button>
                            <button className={`${global.boton} ${styles.boton__colorNegro}`} onClick={handleButtonClick}>Ver pedidos</button>
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
                                <p className={styles.input}>Administrador Granier</p>
                            </div>
                            <div className={styles.label}>
                                <p className={styles.input}>ID - 8a32zb87h</p>
                            </div>
                            <div className={styles.label}>
                                <p className={styles.input}>{user?.email}</p>
                            </div>
                            <div className={styles.label}>
                                <p className={styles.input}>04141742911</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={styles.divider}></div>
                <section className={styles.seccionProducto}>
                    <div className={styles.contenedorProducto}>
                        <div className={styles.cajitaProducto}>
                            <h2 className={styles.titulo}>Producto más vendido</h2>
                            <div className={styles.contenedorImagenProducto}>
                                <div className={styles.imagenProductoVendido}>
                                    <img src={imagenCualquiera} alt="producto más vendido" />
                                </div>

                                <div className={styles.descripcionProductoVendido}>
                                    <p className={styles.descripcionNombre}>(Nombre del Producto)</p>
                                    <p className={styles.descripcionPrecio}>(Información)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dividerProductoVendido}></div>
                    <div className={styles.datosProductoVendido}>
                        <p className={styles.datos}>Clientes Ingresados</p>
                        <p className={styles.datosDinamicos}>{clientesIngresados}</p>
                        <p className={styles.datos}>Número de ventas</p>
                        <p className={styles.datosDinamicos}>No hay ventas registradas</p>
                        <p className={styles.datos}>Ingresos</p>
                        <p className={styles.datosDinamicos}>No hay ingresos registrados</p>
                    </div>
                </section>
                <div className={styles.divider}></div>
                <section className={styles.seccionComentario}>
                    <h2 className={styles.tituloComentario}>Comentarios del Cliente</h2>
                    <FichaComentario/>
                </section>
            </div>
            <div className={styles.contenedorBoton}>
                <button className={`${global.boton} ${styles.boton}`} onClick={handleClick}>Cerrar Sesión</button>
            </div>
            {showPopUp && <PopupInfo onClose={() => setShowPopUp(false)} />}
        </div>
    );
}

export default MiPerfilAdmin;
