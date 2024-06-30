import styles from './Carrito.module.css'
import logo from '../../assets/logo-toggle.png'


function carrito(){
    return(
        <div className={styles.contenedor}>
            <div className={styles.imagenCarrito}>
                <img src={logo} alt='Carrito'></img>
            </div>
        </div>
    )
}

export default carrito