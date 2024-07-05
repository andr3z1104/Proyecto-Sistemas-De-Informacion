import styles from './FichaPedido.module.css';
import photoClient from '../../assets/FrameFicha.png'

function FichaPedido() {
    return (
        <>
            <div className={styles.fichaPedido}>

                <img className={styles.imagePedido} src={photoClient} alt="" />
                <div className={styles.dataContainer}>
                    <h2>INFORMACIÓN DEL CLIENTE</h2>
                    <hr className={styles.horizontalLine} />
                    <h3 className={styles.dataInformation}>TELÉFONO: </h3>
                    <h3 className={styles.dataInformation}>CORREO: </h3>

                    <div className={styles.finalBoxes}>
                        <div className={styles.leftBox}>
                            <h3 className={styles.titlesBoxes}>Total:</h3>
                            <p className={styles.littleBox}> </p>
                        </div>

                        <div className={styles.leftBox}>
                            <h3 className={styles.titlesBoxes}>Tipo de Entrega:</h3>
                            <p className={styles.littleBox}> </p>


                        </div>



                    </div>


                </div>

            </div >

        </>

    )
}
export default FichaPedido;