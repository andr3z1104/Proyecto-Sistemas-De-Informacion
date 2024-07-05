import styles from './PedidosActuales.module.css';
import FichaPedido from '../FichaPedido/FichaPedido';

function PedidosActuales() {
    return (
        <div className={styles.pedidosActuales}>

            <h1>Pedidos Actuales</h1>


            <div className={styles.pedidosContainer}>
                <FichaPedido />
                <FichaPedido />
                <FichaPedido />
                <FichaPedido />
            </div>

        </div>
    )
}

export default PedidosActuales;