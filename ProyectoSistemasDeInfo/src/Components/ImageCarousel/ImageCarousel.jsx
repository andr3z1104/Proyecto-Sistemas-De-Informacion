
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './ImageCarousel.module.css'

import image1 from '../../assets/Saman.png';
import image2 from '../../assets/Bandera.png';
import image3 from '../../assets/Monumento.png';


import { useNavigate } from 'react-router-dom';


function ImageCarousel (){
    const navigate = useNavigate();
    return(
        <div className={styles.carouselContainer}>
        <Carousel className={styles.carouselBackground} controls={false} indicators={false} interval={3000} pause={false}> {/** Componente de la libreria bootstrap. Contenedor principal del carousel*/}
            <Carousel.Item>
                <div>
                <img className="d-block w-100" src={image1} alt="imagen1" />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div>
                <img className="d-block w-100" src={image2} alt="imagen2" />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div>
                <img className="d-block w-100" src={image3} alt="imagen3" />
                </div>
            </Carousel.Item> {/**"Slides" del carousel*/}

        </Carousel>
        <div className={styles.carouselCaption}>
            <h3 className={styles.Text}>Somos más que una tienda.</h3>
            <h3 className={styles.Text}>Buscamos conectar contigo.</h3>
            <h3 className={styles.Text}>Únete al equipo Granier</h3>
            <button className={styles.navButton} onClick={() => navigate('/Contacto')}>CONTÁCTANOS</button>
        </div>
        <div className={styles.carouselOverlay}></div>
        </div>
        
    )
}

export default ImageCarousel