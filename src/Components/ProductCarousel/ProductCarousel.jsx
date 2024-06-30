/* eslint-disable react/jsx-key */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './custom-slick.css'; // Importar el archivo CSS personalizado


import styles from './ProductCarousel.module.css';
import global from "../../Global.module.css"

import image1 from '../../assets/Americano.png';
import image2 from '../../assets/Capuccino.png';
import image3 from '../../assets/CaramelLatte.png';
import image4 from '../../assets/Mocca.png';
import image5 from '../../assets/Macchiato.png';
import image6 from '../../assets/FrappeChocolate.png';
import image7 from '../../assets/DesayunoAmericano.png';
import image8 from '../../assets/OmeleteDeVegetales.png';



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

function ProductCarousel() {
    const productos = [
        { id: 1, name: 'CAFE AMERICANO', price: '$3.5', image: image1},
        { id: 2, name: 'CAFE CAPUCCINO', price: '$3.5', image: image2 },
        { id: 3, name: 'CAFE CARAMEL LATTE', price: '$5.99', image: image3 },
        { id: 4, name: 'CAFE MOCCA', price: '$3.5', image: image4 },
        { id: 5, name: 'CAFE EXPRESSO', price: '$4.99', image: image5 },
        { id: 6, name: 'FRAPPE CHOCOLATE', price: '$4.00', image: image6 },
        { id: 7, name: 'DESAYUNO AMERICANO', price: '$8.00', image: image7 },
        { id: 8, name: 'OMELET DE VEGETALES', price: '$7.00', image: image8 },
    ];
    
    var settings = {
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
            <p className={styles.tituloCarrusel}>Calidad a tu alcance</p>
            <div className={styles.tarjetaCarrusel}>
                <Slider {...settings}>
                    {productos.map( (d) => (
                        <div className={styles.contenedor}>
                            
                            <div className={styles.contenedorImagen}>
                                <img className={styles.imagen} src={d.image} alt="opcionMenú" />
                            </div>

                            <div className={styles.descripcion}>
                                <p className={styles.descripcionNombre}>{d.name} </p>
                                <p className={styles.descripcionPrecio}>{d.price} </p>
                                <button className={`${styles.descripcionBoton} ${global.boton}`}>Menú</button>
                                
                            </div>
                            
                        </div>

                    ))}

                </Slider>
            </div>
        </div>

    );
}

export default ProductCarousel;
