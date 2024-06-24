import styles from './InicioAdmin.module.css'
import loggoToggle from '../../assets/logo-toggle.png'
import seguridadlogo from '../../assets/Seguridad.png'
import { useState } from 'react';

import appFirebase from '../../credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getFirestore } from "firebase/firestore";
import { getDocs, query, where} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const db = getFirestore(appFirebase);
const auth = getAuth(appFirebase); // Autenticación de la app

function IniciarAdmin() {

    // "admin@granierunimet.com"
    // id: "8a32zb87h"
    // password: "adminGranier"

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        window.location.href = '/InicioDeSesion';
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "contraseña") setPassword(value);
        if (name == "id") setId(value);
    };

    const handleAdminButton =  async (e) => {
        e.preventDefault();
        
        const usersRef = collection(db, 'admins');

        const ID = query(usersRef, where('id', '==', id));

        const idExist = await getDocs(ID);
        console.log(idExist);
        // Verificar si admin existe o no
        if (idExist.empty) {
            alert('Datos inválidos');

        } else {
            await signInWithEmailAndPassword(auth,email,password);
            navigate('/');
            alert("Bienvenido, ADMIN");
    }}

    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={`${styles['form-container']} ${styles['sign-up']}`}>

                        <form>
                            <h1>Iniciar Sesión</h1>
                            <div className={styles.socialMedia}>
                            <a> 
                                <img src={seguridadlogo}></img>
                            </a>
                            </div>

                            <input name = 'id' value = {id} placeholder='ID' onChange={handleInputChange} required></input>
                            <input type= 'email' placeholder='Correo' name='email' value = {email} onChange={handleInputChange} required></input>
                            <input name = 'contraseña' value = {password} onChange={handleInputChange} required placeholder='Contraseña'></input>
                            
                            <button onClick={handleAdminButton}>Iniciar Sesion</button>
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