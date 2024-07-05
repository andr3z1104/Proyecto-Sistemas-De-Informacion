import styles from './InicioDeSesion.module.css';
import googleLogo from '../../assets/google-svgrepo-com.svg';
import facebookLogo from '../../assets/facebook-svgrepo-com.svg';
import loggoToggle from '../../assets/logo-toggle.png';

import appFirebase from '../../credenciales';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { useState, useContext } from 'react';


import PopupCondiciones from '../../Components/Popup/PopupCondiciones';
import PopupInfo from '../../Components/Popup/PopupInicioSesion'; 

const auth = getAuth(appFirebase);

function InicioDeSesion() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPopUp, setShowPopUp] = useState(false);
    const [showPopUp1, setShowPopUp1] = useState(false);

    const handleClick = () => {
        window.location.href = '/IniciarAdmin';
    }

    const signInWithGoogle = async (event) => {
        event.preventDefault(); 
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            setShowPopUp(true);
        } catch (error) {
            alert('Ha ocurrido un error');
        }
    };

    const signInWithFacebook = async (event) => {
        event.preventDefault(); 
        try {
            const provider = new FacebookAuthProvider();
            await signInWithPopup(auth, provider);
            setShowPopUp(true);
        } catch (error) {
            alert('Ha ocurrido un error');
        }
    };

    const handleRegisterClick = () => {
        window.location.href = '/Registrarse';
    }

    const onClick = async (e) => {
        e.preventDefault();
        setShowPopUp(true);
    };
    const onClick1 = async (e) => {
        e.preventDefault();
        setShowPopUp1(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "contraseña") setPassword(value);
    };

    const handleLoginButton = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setShowPopUp(true);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={`${styles['form-container']} ${styles['sign-in']}`}>
                    <form>
                        <h1>Iniciar Sesión</h1>
                        <div className={styles.socialMedia}>
                            <a onClick={signInWithGoogle}>
                                <img src={googleLogo} alt="Google" />
                            </a>
                            <a onClick={signInWithFacebook}>
                                <img src={facebookLogo} alt="Facebook" />
                            </a>
                        </div>
                        <div className={styles.input}>
                            <input type='email' placeholder='Correo' name='email' value={email} onChange={handleInputChange} required />
                            <input type='password' placeholder='Contraseña' name='contraseña' value={password} onChange={handleInputChange} required />
                            <span>Al iniciar sesión, aceptas las <a href="/CondicionesDeUso" onClick={onClick1}>Condiciones de uso</a> de Granier</span>
                        </div>
                        <button onClick={handleLoginButton}>Iniciar Sesión</button>
                        
                        <a onClick={handleClick}>¿Eres administrador? <span className={styles.underline}>Click aquí</span></a>
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

            {showPopUp && <PopupInfo onClose={() => setShowPopUp(false)} />}
            {showPopUp1 && <PopupCondiciones onClose={() => setShowPopUp1(false)} />}
        </div>
    );
}

export default InicioDeSesion;
