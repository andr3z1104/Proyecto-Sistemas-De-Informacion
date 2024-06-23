import styles from './InicioDeSesion.module.css'


function InicioDeSesion() {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={`${styles['form-container']} ${styles['sign-in']}`}>

                        <form>
                            <h1>Sign in</h1>

                            <div>
                                <input type="email" placeholder='Email' />
                                <input type="password" placeholder='Password' />
                                <span>Al iniciar sesión, aceptas las Condiciones de uso de Granier</span>
                                <button>Iniciar Sesion</button>
                            </div>
                        </form>
                    <div className={styles['toggle-container']}>
                        <div className={styles['toggle']}>
                            <div></div>
                        </div>
                        
                    </div>
                        <img src="" alt="" />
                        <span> ¿No tienes cuenta?</span>
                        <button>Registrarse</button>

                    </div>
                </div>

            </div>


        </>
    );
}

export default InicioDeSesion