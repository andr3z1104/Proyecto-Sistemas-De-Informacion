import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ProductCarousel.module.css';

import image1 from '../../assets/Americano.png';
import image2 from '../../assets/Capuccino.png';
import image3 from '../../assets/CaramelLatte.png';
import image4 from '../../assets/Mocca.png';
import image5 from '../../assets/Macchiato.png';

{/**Son librerias que permiten hacer un carousel horizontal */}

function ProductCarousel(){
    const productos = [
        { id: 1, name: 'AMERICANO', price: '$3.5', image: image1 },
        { id: 2, name: 'CAPUCCINO', price: '$3.5', image: image2 },
        { id: 3, name: 'CARAMEL LATTE', price: '$5.99', image: image3 },
        { id: 4, name: 'MOCCA', price: '$3.5', image: image4 },
        { id: 5, name: 'EXPRESSO', price: '$4.99', image: image5 },
    ]

    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1};

    const productosCarousel = [];
    for(let i = 0; i < productos.length; i++){
        const producto = productos[i];
        productosCarousel.push(
            <div key={producto.id} className="tarjetaProducto">
                <img src={producto.image} alt={producto.name} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
            </div>
        )
    }

    return (
        <Slider{...config}>
            {productosCarousel}
        </Slider>
    )


}

export default ProductCarousel