import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CaruselMenu.module.css';

import dataProducts from '../../appData'

// Flechas para ver los demas productos
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

function caruselMenu() {

    const config = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className={styles.Slider}>
            <p className={styles.Header}>Panes</p>
            <div className={styles.contenedorTarjeta}>
                <Slider {...config}>

                    {dataProducts.map((producto) => (
                        <div key={producto.ID} className={styles.tarjetaProductos}>
                            <div className={styles.centerContent}>
                                <img src={producto.foto} alt={producto.nombre} className={styles.img} />
                            </div>
                            <div className={styles.textContainer}>
                                <p className={styles.TextName}>{producto.nombre}</p>
                                <p className={styles.TextPrice}>{producto.precio}$</p>
                            </div>
                            <button className={styles.navButton}>Añadir Carrito</button>
                            
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default caruselMenu;
