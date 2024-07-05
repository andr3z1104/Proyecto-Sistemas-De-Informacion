import styles from './ProductoPedido.module.css'

import { DataContext } from '../../Context/DataProvider';


import { useContext} from 'react';




function ProductoPedido(){


    const value = useContext(DataContext);

    const productos = value.productos
    const [carrito, setCarrito] = value.carrito;


    return(
        <>
        {carrito.map((item) => {
        const producto = productos.find((p) => p.ID === item.ID);
        if (producto) {
        return (
            <div key={item.ID} className={styles.contenedorPedido}>
                <div className={styles.spacer}>
                <div className={styles.allignSide}>
                <div className={styles.contenedorImagen}>
                    <div className={styles.imagen}>
                    <img src={producto.img} />
                    </div>
                </div>

                <div className={styles.informacionPedido}>
                    <h2>{producto.nombre}</h2>
                    <div className={styles.dividerPedido}></div>
                    <p>REF. ${producto.precio}</p>
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
        );
        } else {
        return null;
        }
    })}
    <div className={styles.divider}></div>
        </>
    )
}

export default ProductoPedido