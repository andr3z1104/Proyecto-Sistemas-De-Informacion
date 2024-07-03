import styles from './ProductoPedido.module.css'

import placeholderFoto from '../../assets/Mocca.png'


function ProductoPedido(){
    return(
        <>
        <div className={styles.contenedorPedido}>
        <div className={styles.spacer}>
            <div className={styles.allignSide}>
                <div className={styles.contenedorImagen}>
                    <div className={styles.imagen}>
                    <img src={placeholderFoto}></img>
                    </div>
                </div>

                <div className={styles.informacionPedido}>
                    <h2> Mocca </h2>
                    <div className={styles.dividerPedido}></div>
                    <p> REF. $99 </p>
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
        <div className={styles.divider}></div>
        </>
    )
}

export default ProductoPedido