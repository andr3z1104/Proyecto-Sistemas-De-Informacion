import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'; 
import { useContext } from 'react';

import { DataContext } from '../../Context/DataProvider';

import styles from './CaruselMenu.module.css';
import global from "../../Global.module.css"
import { useUser } from '../../Controllers/UserContext';

// Flechas para ver los demás productos
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.arrow}`}
            style={{ ...style, right: "10px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.arrow}`}
            style={{ ...style, left: "10px" }}
            onClick={onClick}    
        />
    );
}

function CaruselMenu({ titulo }) {
    const user = useUser();
    const value = useContext(DataContext);
    const productos = value.productos;
    const addCarrito = (id) => {
        value.addCarrito(id);
        alert("Producto añadido al carrito");
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.contenedorCarrusel}>
            <p className={styles.tituloCarrusel}>{titulo}</p>
            <div className={styles.tarjetaCarrusel}>
                <Slider {...settings}>
                    {productos.filter((d) => d.categoria === titulo).map((d) => (
                        <div className={styles.contenedor} key={d.ID}>
                            <Link to={`/ProductoDetalles/${d.ID}`} className={styles.contenedorImagen}>
                                <img className={styles.imagen} src={d.img} alt={d.nombre} />
                            </Link>
                            <div className={styles.descripcion}>
                                <p className={styles.descripcionNombre}>{d.nombre}</p>
                                <p className={styles.descripcionPrecio}>{d.precio} $</p>
                                <Link to={`/ProductoDetalles/${d.ID}`} className={`${styles.descripcionBoton} ${global.boton}`}>Ver Detalles</Link>
                                { user !== null && <button id={d.ID} className={`${styles.descripcionBoton} ${global.boton}`} onClick={() => addCarrito(d.ID)}>Añadir Carrito</button>}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default CaruselMenu;
