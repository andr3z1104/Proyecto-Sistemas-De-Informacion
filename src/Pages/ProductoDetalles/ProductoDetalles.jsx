import { useState, useEffect } from 'react';
import styles from './ProductoDetalles.module.css';
import { Link } from 'react-router-dom';
import dataProducts from '../../appData';
import { useParams } from 'react-router-dom';

function ProductoDetalles() {
    const params = useParams();
    const [detalle, setDetalle] = useState({});

    useEffect(() => {
        dataProducts.forEach(producto => {
            if (producto.ID === parseInt(params.ID)) {
                setDetalle(producto);
            }
        });
    }, [params.ID]);

    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className={styles.app_container}>
            <div className={styles.two_parts}>
                <div className={styles.back_layer}>
                    <div className={styles.inside_background}>
                        <div className={styles.image_container}>
                            <img src={detalle.img} alt={detalle.nombre} />
                        </div>
                    </div>
                    <div className={styles.details_container}>
                        <h2>Descripción</h2>
                        <p>{detalle.descripcion}</p>
                    </div>
                </div>
                <div className={styles.back_layer}>
                    <div className={styles.product_info}>
                        <h3>Nombre del Producto</h3>
                        <input className={styles.small_text} type="text" value={detalle.nombre} readOnly />
                        <div className={styles.menu_price_container}>
                            <div className={styles.space_price}>
                                <h4>Precio</h4>
                                <input className={styles.small_textp} type="text" value={`${detalle.precio}$`} readOnly />
                            </div>
                            <div className={styles.space_class}>
                                <h4>Tipo de Menú</h4>
                                <input className={styles.small_textp} type="text" value={detalle.categoria} readOnly />
                            </div>
                        </div>
                        <h2>Ingredientes</h2>
                        <ul>
                            {detalle.ingredientes && detalle.ingredientes.map((ingrediente, index) => (
                                <li key={index}>
                                    {ingrediente.nombreIngred}
                                    {ingrediente.contraIndica && (
                                        <strong> {ingrediente.contraIndica}</strong>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className={`${styles.quantity_control} ${quantity === 0 ? styles.no_bg : ''}`}>
                            {quantity === 0 ? (
                                <button className={styles.add_button} onClick={incrementQuantity}>Agregar</button>
                            ) : (
                                <>
                                    <button className={styles.button1} onClick={decrementQuantity}>-</button>
                                    <span>{quantity}</span>
                                    <button className={styles.button2} onClick={incrementQuantity}>+</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Link className={styles.spacer_bButton} to="/Menu">
                <button className={styles.back_button}>Regresar</button>
            </Link>
        </div>
    );
}

export default ProductoDetalles;
