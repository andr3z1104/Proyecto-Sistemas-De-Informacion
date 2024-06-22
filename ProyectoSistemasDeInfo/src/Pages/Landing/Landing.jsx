import styles from './Landing.module.css'
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';

function Landing(){
    return(
        <div className='landingPage'>
            <header>
                <h1>El sabor que te acompaña en cada estudio</h1>
                <button>CONÓCENOS</button>
            </header>

            <div>
                <ImageCarousel/>
            </div>

            <div>
                <ProductCarousel/>
            </div>
            
        </div>
        
    );
}

export default Landing

