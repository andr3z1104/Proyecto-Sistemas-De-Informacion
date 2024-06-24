import styles from './Landing.module.css'
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import image1 from '../../assets/ImagenPrincipal.png';
import image2 from '../../assets/panycafe.png';
import image3 from '../../assets/pan.png';


import { useNavigate } from 'react-router-dom';

function Landing(){
    const navigate = useNavigate();

    const onClick = (e) => {
        e.preventDefault();
        alert("PÁGINA EN CONSTRUCCIÓN...");
      };
    return(
        <div className='landingPage'>
            <div className={styles.topContainer}>
                <div><img className="d-block w-100" src={image1} alt="imagen1" /> </div>
                <div className={styles.containerOverlay}></div>
                <div className={styles.containerCaption}>
                    <h3 className={styles.Text}>El sabor que te acompaña</h3>
                    <h3 className={styles.Text}>en cada estudio</h3>
                    <button className={styles.navButton} onClick={onClick}>CONÓCENOS</button>
                </div>
            </div>

            <div className={styles.secondContainer}>
                
                <div className={styles.leftSide}>
                    <p className={styles.h2Left}>¡Ven y Comparte!</p>
                    <div className = {styles.imageContainer}>
                        <img src={image2} alt=""className={styles.imageLeft} />
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.rightSide}>
                    <div className={styles.rightSide_UpperText}>
                        <p className={styles.h2Right}>Maneras de sobrevivir <i>Semana 6</i></p>
                        <p className={styles.p}>*Aplica para semana de parciales*</p>
                    </div>
                    <div className = {styles.imageContainer}>
                        <img src={image3} alt="" className={styles.imageRight}/>
                    </div>
                    <p className={styles.p}>... o simplemente <i>llégate</i>, ¡te esperamos!</p>
                </div>

            </div>

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

