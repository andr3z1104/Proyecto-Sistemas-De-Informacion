import { useState } from 'react';
import styles from './ProductoDetalles.module.css';
import imagen from './../../assets/croissant.png';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function ProductoDetalles() {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  //const navigate = useNavigate();

  //const onClick = (e) => {
  //    e.preventDefault();
  //    alert("PÁGINA EN CONSTRUCCIÓN...");
  //};

  return (
    <div className={styles.app_container}>
        <div className={styles.two_parts}>
            <div className={styles.back_layer}>
                <div className={styles.inside_background}>
                    <div className={styles.image_container}>
                        <img src={imagen} alt="Croissant" />
                    </div>
                </div>
                <div className={styles.details_container}>
                    <h2>Descripción</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem
                    odio, vulputate vestibulum convallis eu, vestibulum eget dui. Pellentesque
                    bibendum nisi in leo congue semper.
                    </p>
                </div>
            </div>
            <div className={styles.back_layer}>
                <div className={styles.product_info}>
                    <h3>Nombre del Producto</h3>
                    <input className={styles.small_text} type="text" value="Croissant" readOnly />
                    <div className={styles.menu_price_container}>
                        <div className={styles.space_price}>
                            <h4>Precio</h4>
                            <input className={styles.small_textp} type="text" value="3.5$" readOnly />
                        </div>
                        <div className={styles.space_class}>
                            <h4>Tipo de Menú</h4>
                            <input className={styles.small_textp} type="text" value="Desayuno" readOnly />
                        </div>
                    </div>
                    <h2>Ingredientes</h2>
                    <ul>
                        <li>Huevo</li>
                        <li>Trigo (<strong>gluten</strong>)</li>
                        <li>Queso (<strong>lácteos</strong>)</li>
                        <li>Mantequilla (<strong>lácteos</strong>)</li>
                        <li>Azúcar</li>
                    </ul>
                    <div className={styles.quantity_control}>
                        <button className={styles.button1} onClick={decrementQuantity}>-</button>
                        <span>{quantity}</span>
                        <button className={styles.button2} onClick={incrementQuantity}>+</button>
                    </div>
                </div>
            </div>
        </div>
        <Link to="/Menu">
            <button className={styles.back_button}>Regresar</button>
        </Link>
    </div>
  );
}

export default ProductoDetalles;