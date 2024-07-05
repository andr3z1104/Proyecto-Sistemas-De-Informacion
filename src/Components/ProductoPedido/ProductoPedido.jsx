import styles from "./ProductoPedido.module.css";
import { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import { useUser } from "../../Controllers/UserContext";
import { createOrUpdateCart } from "../../Controllers/cartController";

function ProductoPedido({ item, productos, updateCartState }) {
  const producto = productos.find((p) => p.ID === item.ID);
  const { user } = useUser();

  if (!producto) {
    return null;
  }

  const handleAddQuantity = () => {
    createOrUpdateCart(user, producto, 1, updateCartState);
  };

  const handleRemoveQuantity = () => {
    createOrUpdateCart(user, producto, -1, updateCartState);
  };

  return (
    <div key={item.ID} className={styles.contenedorPedido}>
      <div className={styles.spacer}>
        <div className={styles.allignSide}>
          <div className={styles.contenedorImagen}>
            <div className={styles.imagen}>
              <img src={producto.img} alt={producto.nombre} />
            </div>
          </div>
          <div className={styles.informacionPedido}>
            <h2>{producto.nombre}</h2>
            <div className={styles.dividerPedido}></div>
            <p>REF. ${producto.precio}</p>
          </div>
          <div className={styles.botonAgregar}>
            <div className={styles.papelera}>
              <button onClick={handleRemoveQuantity}> 🗑️ </button>
            </div>
            <div className={styles.cantidadProducto}>
              <p> {item.quantity} </p>
            </div>
            <div className={styles.agregar}>
              <button onClick={handleAddQuantity}> ➕ </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoPedido;
