import styles from './InicioDeSesion.module.css'
import backgroundToggle from '../../assets/background-toggle.jpg'
import logoToggle from '../../assets/logo-toggle.png'

function InicioDeSesion() {
    return (
        <>
            <body className={styles.body} >
                <div className={styles.container}>

                    <div className= "form-container sign-up">
                        <form>
                            <h1>Crear Cuenta</h1>

                            <div className='icons'>
                                <a href="#" className='icon'></a>
                                <a href="#" className='icon'></a>
                            </div>

                            

                            <input type="text" placeholder='Nombre' />
                            <input type="text" placeholder='Apellido' />
                            <input type="text" placeholder='Correo' />
                            <input type="text" placeholder='Telefono' />
                            <input type="text" placeholder='Contraseña' />
                            <input type="text" placeholder='Verificar Contraseña' />
                            
                            <button>Registrarse</button>
                            
                            <span>Al regristrarte, aceptas las Condiciones de uso de Granier</span>
                        </form>
                    </div>

                    <div className="form-container sign-in">
                        <form>
                            <h1>Iniciar Sesion</h1>

                            <div className='icons'>
                                <a href="#" className='icon'></a>
                                <a href="#" className='icon'></a>
                            </div>
                            
                            <span>Al iniciar sesion, aceptas las Condiciones de uso de Granier</span>

                            <input type="text" placeholder='Correo' />
                            <input type="text" placeholder='Contraseña' />
                            <button>Iniciar Sesion</button>
                        </form>
                    </div>

                    <div className= "toggle-container">

                        <div className="toggle">
                            
                            <div className= "toggle-panel toggle-right">
                                <a href="#">¿Ya tienes una cuenta?</a>
                                <button className="container hidden" id="login">Iniciar Sesion</button>
                            </div>

                            <div className="toggle-panel toggle-left">                                
                                <a href="#">¿No tienes cuenta?</a>
                                <button className='container hidden' id='register'>Registrarse</button>
                            </div>

                        </div>

                    </div>

                </div>

            </body>

        </>



    );
}

export default InicioDeSesion