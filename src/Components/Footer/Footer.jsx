import styles from './Footer.module.css'
import { Link } from 'react-router-dom';


function Footer(){
    return (
    <footer className={styles.footer}>
        <div className={styles.img}>
            <nav className={styles.nav}>
                <a href='https://maps.app.goo.gl/GvuckTwh5J6fcL6m7' className={styles.navItem}>VISÍTANOS</a>
                <Link to='/Contacto' className={styles.navItem}>CONTÁCTANOS</Link>
            </nav>
        </div>
    </footer>
    );
}

export default Footer;