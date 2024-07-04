import styles from './ProductoPedido.module.css'

import placeholderFoto from '../../assets/Mocca.png'





function ProductoPedido(props){

    const {currentCarrito} = props

    return(
        <>

        {currentCarrito.map((producto) => (
        <div className={styles.contenedorPedido}>
        <div className={styles.spacer}>
            <div className={styles.allignSide}>
                <div className={styles.contenedorImagen}>
                    <div className={styles.imagen}>
                    <img src={producto.img}></img>
                    </div>
                </div>

                <div className={styles.informacionPedido}>
                    <h2> {producto.nombre} </h2>
                    <div className={styles.dividerPedido}></div>
                    <p> {producto.precio} </p>
                </div>

                <div className={styles.botonAgregar}>
                    <div className={styles.papelera}>
                        <button> 🗑️ </button>
                    </div>
                    <div className={styles.cantidadProducto}>
                        <p> 1 </p>
                    </div>
                    <div className={styles.agregar}>
                        <button> ➕ </button>
                    </div>
                </div>

                </div>
            </div>
        </div>
        ))}
        <div className={styles.divider}></div>
        </>
    )
}

export default ProductoPedido