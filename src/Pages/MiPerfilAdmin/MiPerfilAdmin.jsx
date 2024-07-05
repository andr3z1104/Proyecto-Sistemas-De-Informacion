import styles from "./MiPerfilAdmin.module.css"
import global from "../../Global.module.css"
import imagenUsuario from "../../assets/usuarioimg.png"
import imagenCualquiera from "../../assets/Mocca.png";
import { MdStayCurrentLandscape } from "react-icons/md";

function MiPerfilAdmin() {

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
                            <button className={`${global.boton} ${styles.boton__colorNegro}`} >Gestionar Menú</button>
                            <button className={`${global.boton} ${styles.boton__colorNegro}`}>Ver pedidos</button>
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
                                <p className={styles.input}>Nombre</p>
                            </div>
                            <div className={styles.label}>
                                <p className={styles.input}>Apellido</p>
                            </div>
                            <div className={styles.label}>
                                <p className={styles.input}>Correo</p>
                            </div>
                            <div className={styles.label}>
                                <p className={styles.input}>Telefono</p>
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
                                    <p className={styles.descripcionNombre}>nombreproducto</p>
                                    <p className={styles.descripcionPrecio}>Referencia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dividerProductoVendido}></div>
                    <div className={styles.datosProductoVendido}>
                        <p className={styles.datos}>Clientes Ingresados</p>
                        <p className={styles.datosDinamicos}>Cantclientes</p>
                        <p className={styles.datos}>Número de ventas</p>
                        <p className={styles.datosDinamicos}>ventas</p>
                        <p className={styles.datos}>Ingresos</p>
                        <p className={styles.datosDinamicos}>ingresos</p>
                    </div>
                    
                </section>
                <div className={styles.divider}></div>
                <section className={styles.seccionComentario}>
                        
   
                </section>
            </div>
            

            <div className={styles.contenedorBoton}>
                <button className={`${global.boton} ${styles.boton}`}>Cerrar Sesion</button>
            </div>

        </div>
        
    )
}

export default MiPerfilAdmin;
