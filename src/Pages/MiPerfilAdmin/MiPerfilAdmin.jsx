import styles from "./MiPerfilAdmin.module.css"
import global from "../../Global.module.css"

function MiPerfilAdmin() {

    return (
        <div className={styles.contenedorPerfil}>
            <div className={styles.infoContacto}>
                <section className={styles.seccionDatos}>
                    <div className={styles.seccionDatos_imagenUsuario}>
                        <div>

                        </div>
                        <div className={`${styles.divider__colorBlanco} ${styles.divider}`}></div>
                        <div className={styles.funcionesAdmin}>
                            <button className={`${global.boton} ${styles.boton__colorNegro}`} >Gestionar Menú</button>
                            <button className={`${global.boton} ${styles.boton__colorNegro}`}>Ver pedidos</button>
                        </div>
                    </div>
                    <div className={styles.seccionDatos_datosUsuario}>
                        
                    </div>
                </section>
                <div className={styles.divider}></div>
                <section className={styles.seccionProducto}>
                    <div className={styles.seccionProducto_titulo}>
                        <h2>Producto más vendido</h2>
                        <div className={styles.contenedorImagenProducto}>
                            <div className={styles.imagenProductoVendido}>

                            </div>
                            <div className={styles.descripcionProductoVendido}>
                                <p>nombreproducto</p>
                                <p>Referencia</p>
                            </div>

                        </div>
                        <div className={styles.datosProductoVendido}>
                            <p>Clientes Ingresados</p>
                            <p>Número de ventas</p>
                            <p>Ingresos</p>
                        </div>
                    </div>
                </section>
                <div className={styles.divider}></div>
                <section className={styles.seccionComentario}>
                        <p className={styles.seccionComentario_titulo}>Comentario Reciente</p>
                        <div className={styles.contenedorComentario}>
                            <div className={styles.imagenUsuario}></div>
                            <div className={styles.comentarioReciente}>
                                <div className={styles.comentarioReciente_titulo}>
                                    <p>Calificación</p>
                                    <p>Estrellitas</p>
                                </div>
                                <textarea>Acá va el comentario</textarea>
                            </div>
                        </div>
   
                </section>
            </div>
            

            <div className={styles.contenedorBoton}>
                <button className={`${global.boton} ${styles.boton}`}>Cerrar Sesion</button>
            </div>

        </div>
        
    )
}

export default MiPerfilAdmin;
