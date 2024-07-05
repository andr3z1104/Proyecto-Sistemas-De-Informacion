import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { DataContext } from "../../Context/DataProvider";
import { useUser } from "../../Controllers/UserContext";
import useCart from "../../hooks/useCart";
import { createOrUpdateCart } from "../../Controllers/cartController";

import styles from "./CaruselMenu.module.css";
import global from "../../Global.module.css";

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
  const value = useContext(DataContext);
  const productos = value.productos;
  const { user } = useUser();
  const cart = useCart();

  const handleAddToCart = async (product) => {
    console.log("User data:", user);
    console.log("Product data:", product);

    if (user) {
      if (product && product.ID && product.precio) {
        await createOrUpdateCart(user, product);
      } else {
        console.error("Product data is incomplete:", product);
      }
    } else {
      alert("Por favor, inicie sesión para añadir productos al carrito");
    }
  };

  var settings = {
    adaptiveHeight: true,
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
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.contenedorCarrusel}>
      <p className={styles.tituloCarrusel}>{titulo}</p>
      <div className={styles.tarjetaCarrusel}>
        <Slider {...settings}>
          {productos
            .filter((d) => d.categoria === titulo)
            .map((d) => (
              <div key={d.ID} className={styles.contenedor}>
                <Link
                  to={`/ProductoDetalles/${d.ID}`}
                  className={styles.contenedorImagen}
                >
                  <img className={styles.imagen} src={d.img} alt={d.nombre} />
                </Link>
                <div className={styles.descripcion}>
                  <p className={styles.descripcionNombre}>{d.nombre}</p>
                  <p className={styles.descripcionPrecio}>{d.precio} $</p>
                  <Link
                    to={`/ProductoDetalles/${d.ID}`}
                    className={`${styles.descripcionBoton} ${global.boton}`}
                  >
                    Ver Detalles
                  </Link>
                  <button
                    className={`${styles.descripcionBoton} ${global.boton}`}
                    onClick={() => handleAddToCart(d)}
                  >
                    Añadir Carrito
                  </button>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default CaruselMenu;
