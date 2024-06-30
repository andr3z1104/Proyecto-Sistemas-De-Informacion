import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import styles from './CaruselMenu.module.css';
import global from "../../Global.module.css"

import dataProducts from '../../appData'


//Flechas para ver los demas productos
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

function caruselMenu({titulo}) {

    var settings = {
        adaptiveHeight: false,
        variableWidth: false,
        centerPadding: 0,
        dots: false,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        slidesMargin: 10,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
                    {dataProducts.map( (d) => (
                        <div className={styles.contenedor}>
                            
                            <div className={styles.contenedorImagen}>
                                <img className={styles.imagen} src={d.img} alt={d.nombre} />
                            </div>
                            <div className={styles.descripcion}>
                                <p className={styles.descripcionNombre}>{d.nombre} </p>
                                <p className={styles.descripcionPrecio}>{d.precio} </p>
                                <button className={`${styles.descripcionBoton} ${global.boton}`}>Añadir Carrito</button>
                                
                            </div>
                            
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default caruselMenu;
