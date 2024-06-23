import styles from './Registrarse.module.css'
import googleLogo from '../../assets/google-svgrepo-com.svg'
import facebookLogo from '../../assets/facebook-svgrepo-com.svg'
import loggoToggle from '../../assets/logo-toggle.png'

function Registrarse() {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={`${styles['form-container']} ${styles['sign-up']}`}>

                        <form>
                            <h1>Crear Cuenta</h1>

                            <div className={styles.socialMedia}>
                             <a href='#'> 
                                <img src={googleLogo}></img>
                            </a>
                            <a href='#'>
                                <img src={facebookLogo}></img>
                            </a>
                            </div>

                            <input placeholder='Nombre'></input>
                            <input placeholder='Apellido'></input>
                            <input placeholder='Correo'></input>
                            <input placeholder='Telefono'></input>
                            <input placeholder='Contraseña'></input>
                            <input placeholder='Verificar Contraseña'></input>
                            <span>Al Registrarse, aceptas las Condiciones de uso de Granier</span>
                            <button>Registrarse</button>
                           
                        </form>
                    </div>
                    <div className={styles['toggle-container']}>
                        <div className={styles['toggle']}>
                            <div className={`${styles['toggle-panel']} ${styles['toggle-right']}`}>
                                <img src={loggoToggle} alt="Logo Toggle" />
                                <span> ¿Ya tienes cuenta?</span>
                                <button>Iniciar Sesion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

       


        </>
    );
}

export default Registrarse