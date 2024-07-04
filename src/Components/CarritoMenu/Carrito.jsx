import styles from './Carrito.module.css'
import logo from '../../assets/logo-toggle.png'
import { Link } from 'react-router-dom'; 
//import { currentCarrito } from '../../Pages/Menu/Menu';

function carrito(){

    return(
        <div className={styles.contenedor}>
            <Link  to={`/Carrito`} className={styles.imagenCarrito}>
                <img src={logo} alt='Carrito'></img>
            </Link>
        </div>
    )
}

export default carrito