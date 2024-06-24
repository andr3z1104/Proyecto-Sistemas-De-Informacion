import styles from './InicioAdmin.module.css'
import loggoToggle from '../../assets/logo-toggle.png'
import seguridadlogo from '../../assets/Seguridad.png'

function IniciarAdmin() {
    const handleClick = () => {
        // Redirect to IniciodeSesion page
        window.location.href = '/InicioDeSesion';
    };
    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={`${styles['form-container']} ${styles['sign-up']}`}>

                        <form>
                            <h1>Iniciar Sesión</h1>
                            <div className={styles.socialMedia}>
                             <a > 
                                <img src={seguridadlogo}></img>
                            </a>
                            </div>

                            <input placeholder='ID'></input>
                            <input placeholder='Correo'></input>
                            <input placeholder='Contraseña'></input>
                            <button>Iniciar Sesión</button>
                            <span></span>
                            <a onClick={handleClick}>¿Eres cliente? Click aquí</a> 
                        </form>
                    </div>
                    <div className={styles['toggle-container']}>
                        <div className={styles['toggle']}>
                            <div className={`${styles['toggle-panel']} ${styles['toggle-right']}`}>
                                <img src={loggoToggle} alt="Logo Toggle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IniciarAdmin