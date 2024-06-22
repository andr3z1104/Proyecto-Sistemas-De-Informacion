import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ProductCarousel.module.css';

import image1 from '../../assets/Americano.png';
import image2 from '../../assets/Capuccino.png';
import image3 from '../../assets/CaramelLatte.png';
import image4 from '../../assets/Mocca.png';
import image5 from '../../assets/Macchiato.png';



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

function ProductCarousel() {
    const productos = [
        { id: 1, name: 'AMERICANO', price: '$3.5', image: image1 },
        { id: 2, name: 'CAPUCCINO', price: '$3.5', image: image2 },
        { id: 3, name: 'CARAMEL LATTE', price: '$5.99', image: image3 },
        { id: 4, name: 'MOCCA', price: '$3.5', image: image4 },
        { id: 5, name: 'EXPRESSO', price: '$4.99', image: image5 },
    ];

    const config = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className={styles.Slider}>
            <p className={styles.Header}>Calidad a tu alcance</p>
            <Slider {...config}>
                {productos.map((producto) => (
                    <div key={producto.id} className={styles.tarjetaProductos}>
                        <div className={styles.centerContent}>
                            <img src={producto.image} alt={producto.name} className={styles.img} />
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.TextName}>{producto.name}</p>
                            <p className={styles.TextPrice}>{producto.price}</p>
                        </div>
                        <button className={styles.navButton}>Menú</button>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProductCarousel;
