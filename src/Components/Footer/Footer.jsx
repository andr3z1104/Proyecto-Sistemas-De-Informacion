import styles from './Footer.module.css'
import { Link } from 'react-router-dom';
import global from "../../Global.module.css"


function Footer(){
    return (
    <footer className={styles.footer}>
        <div className={styles.img}>
            <nav className={styles.nav}>
                <a href='https://maps.app.goo.gl/GvuckTwh5J6fcL6m7' className={`${styles.navItem} ${global.boton}`}>VISÍTANOS</a>
                <Link to='/Contacto' className={`${styles.navItem} ${global.boton}`}>CONTÁCTANOS</Link>
            </nav>
        </div>
    </footer>
    );
}

export default Footer;