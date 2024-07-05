import styles from './InfoPedido.module.css';
import photoClient from '../../assets/FrameFicha.png';
import frameCart from '../../assets/FrameCar.png';

function InfoPedido() {
    return (
        <div className={styles.infoPedido}>

            <div className={styles.headerContainer}>
                <h1>Información del Pedido</h1>

                <div className={styles.dataInformationBlock}>
                    <div className={styles.dataInformation}>
                        <p className={styles.valuesInfo1}>Tipo de Pedido: </p>
                        <div className={styles.specialROW}>
                            <p className={styles.specialValuesInfo1}>Nombre</p>
                            <p className={styles.specialValuesInfo2}>Teléfono</p>
                        </div>
                        <p className={styles.valuesInfo2}>Correo</p>

                    </div>

                    <img src={photoClient} alt="" />

                </div>

            </div>

            <div className={styles.middleContainer}>

            </div>

            <div className={styles.bottomContainer}>

                <div className={styles.leftContainer}>
                    <h2>Resumen de venta</h2>

                    <div className={styles.ticketSummary}>
                        <p> Producto</p>
                        <p>Envio</p>
                    </div>

                </div>

                <div className={styles.totalToPay}>
                    <div className={styles.finallyDiv}>
                        <p>Total</p>
                        <p className={styles.colorAmount}>$13</p>
                    </div>

                </div>

                <div className={styles.addCar}>
                    <img src={frameCart} alt="" />
                </div>

            </div>
        </div>
    )
}

export default InfoPedido;