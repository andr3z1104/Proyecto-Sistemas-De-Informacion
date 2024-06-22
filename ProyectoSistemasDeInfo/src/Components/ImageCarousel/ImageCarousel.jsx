
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import image1 from '../../assets/Saman.png';
import image2 from '../../assets/Bandera.png';
import image3 from '../../assets/Monumento.png';


function ImageCarousel (){
    return(
        
        <Carousel> {/** Componente de la libreria bootstrap. Contenedor principal del carousel*/}
            <CarouselItem>
                <img src={image1} alt="imagen1" />
            </CarouselItem>

            <CarouselItem>
                <img src={image2} alt="imagen2" />
            </CarouselItem>

            <CarouselItem>
                <img src={image3} alt="imagen3" />
            </CarouselItem> {/**"Slides" del carousel*/}

        </Carousel>
    )
}

export default ImageCarousel