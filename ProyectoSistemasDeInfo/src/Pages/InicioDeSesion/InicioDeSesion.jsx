import styles from './InicioDeSesion.module.css'
import googleLogo from '../../assets/google-svgrepo-com.svg'
import facebookLogo from '../../assets/facebook-svgrepo-com.svg'
import loggoToggle from '../../assets/logo-toggle.png'

import appFirebase from '../../credenciales';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const auth = getAuth(appFirebase) // Autenticación de la app


function InicioDeSesion() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleClick = () => {
        window.location.href = '/IniciarAdmin';
    }

    const handleRegisterClick = () => {
        window.location.href = '/Registrarse'
    }

    const onClick = (e) => {
        e.preventDefault();
        alert("PÁGINA EN CONSTRUCCIÓN...");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "contraseña") setPassword(value);
    };

    const handleLoginButton = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password);
            navigate('/');
            alert("Inicio de sesión exitoso");
        } catch(error){
            alert(error.message);

        }
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
                            <input  type= 'email' placeholder='Correo' name='email' value = {email} onChange={handleInputChange} required></input>
                            <input type= 'password' placeholder='Contraseña' name= 'contraseña' value = {password} onChange={handleInputChange} required></input>
                            <span>Al iniciar sesion, aceptas las <a href="/CondicionesDeUso" onClick={onClick}>Condiciones de uso</a> de Granier</span>
                            <button onClick={handleLoginButton}>Iniciar Sesion</button>
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