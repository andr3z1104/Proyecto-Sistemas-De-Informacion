import styles from './InicioDeSesion.module.css'
import googleLogo from '../../assets/google-svgrepo-com.svg'
import facebookLogo from '../../assets/facebook-svgrepo-com.svg'
import loggoToggle from '../../assets/logo-toggle.png'


function InicioDeSesion() {

    const handleClick = () => {
        // Redirect to IniciodeSesion page
        window.location.href = '/IniciarAdmin';
    }

    const handleRegisterClick = () => {
        window.location.href = '/Registrarse'
    }


    return (
                  <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={`${styles['form-container']} ${styles['sign-in']}`}>

                        <form>
                            <h1>Iniciar Sesion</h1>

                            <div className={styles.socialMedia}>
                             <a href='#'> 
                                <img src={googleLogo}></img>
                            </a>
                            <a href='#'>
                                <img src={facebookLogo}></img>
                            </a>
                            </div>
                            <input placeholder='Correo'></input>
                            <input placeholder='Contraseña'></input>
                            <span>Al iniciar sesion, aceptas las Condiciones de uso de Granier</span>
                            <button>Iniciar Sesion</button>
                            <a onClick={handleClick}>¿Eres administrador? Click aquí</a>
                           
                        </form>
                    </div>
                    <div className={styles['toggle-container']}>
                        <div className={styles['toggle']}>
                            <div className={`${styles['toggle-panel']} ${styles['toggle-right']}`}>
                                <img src={loggoToggle} alt="Logo Toggle" />
                                <span> ¿No tienes cuenta?</span>
                                <button onClick={handleRegisterClick}>Registrarse </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

       

        </>
    );
}

export default InicioDeSesion