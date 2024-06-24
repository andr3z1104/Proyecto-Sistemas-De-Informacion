import styles from './Registrarse.module.css'
import googleLogo from '../../assets/google-svgrepo-com.svg'
import facebookLogo from '../../assets/facebook-svgrepo-com.svg'
import loggoToggle from '../../assets/logo-toggle.png'

import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import appFirebase from '../../credenciales';

import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getDocs, query, where} from "firebase/firestore";

const db = getFirestore(appFirebase);
const auth = getAuth(appFirebase); // Autenticación de la app

function Registrarse() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [verifypassword, setVerifyPassword] = useState('');

    const navigate = useNavigate();


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name == "name") setName(value);
        if (name == "lastname") setLastName(value);
        if (name === "email") setEmail(value);
        if (name === "contraseña") setPassword(value);
        if (name == "vcontraseña") setVerifyPassword(value);
        if (name == "phone") setPhone(value);
    };

    const handleRegisterButton = async (e) => {

        e.preventDefault();
        
        const emailParts = email.split('@');
            const domain = emailParts[1];
            if (domain !== 'correo.unimet.edu.ve' || domain !== 'unimet.edu.ve') {
                alert('Correo inválido. Dominio incorrecto.')
        }
        else{
            
        const usersRef = collection(db, 'users');
        const Email = query(usersRef, where('email', '==', email));
        const Phone = query(usersRef, where('phone', '==', phone));

        const emailExist = await getDocs(Email);
        const phoneExist = await getDocs(Phone);

        // Verificar si el usuario ya existe o no
        if (!emailExist.empty || !phoneExist.empty) {
            alert('El usuario ya está registrado. Verifique sus datos o inicie sesión');

        } else {
            try {
                const newUser = await createUserWithEmailAndPassword(auth,email,password);
                await addDoc(collection(db, "users"), {
                uid: newUser.user.uid,
                name: name,
                lastName: lastName,
                phone: phone,
                email: email,
                password: password,
                });
                navigate("/");
                alert('¡Registro exitoso! Bienvenido/a')

            } catch (error) {
                alert('ERROR. Asegúrese de que ingresó los datos correctamente');
            }
        }}};

    const handleLoginClick = () => {
        window.location.href = '/InicioDeSesion'
    }

    const onClick = (e) => {
        e.preventDefault();
        alert("PÁGINA EN CONSTRUCCIÓN...");
    };

    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={`${styles['form-container']} ${styles['sign-up']}`}>

                        <form>
                            <h1>Crear Cuenta</h1>

                            <div className={styles.socialMedia}>
                                
                                <img src={googleLogo}></img>
                                <img src={facebookLogo}></img>
                                
                            </div>

                            <input type="text" name = 'name' value= {name} placeholder='Nombre' onChange={handleInputChange} required></input>
                            <input type="text" name = 'lastname' value= {lastName} placeholder='Apellido' onChange={handleInputChange} required></input>
                            <input type= 'email' placeholder='Correo' name='email' value = {email} onChange={handleInputChange} required></input>
                            <input name = 'phone' value={phone} placeholder='Telefono' onChange={handleInputChange} required></input>
                            <input type= 'password' placeholder='Contraseña' name= 'contraseña' value = {password} onChange={handleInputChange} required></input>
                            <input type= 'password' placeholder='Verificar Contraseña' name= 'vcontraseña' value = {verifypassword} onChange={handleInputChange} required></input>
                            <span className={styles.condiciones}>Al Registrarse, aceptas las <a href="/CondicionesDeUso" onClick={onClick}>Condiciones de uso</a> de Granier</span>
                            
                            <button onClick={handleRegisterButton}>Registrarse</button>
                        
                        </form>
                    </div>
                    <div className={styles['toggle-container']}>
                        <div className={styles['toggle']}>
                            <div className={`${styles['toggle-panel']} ${styles['toggle-right']}`}>
                                <img src={loggoToggle} alt="Logo Toggle" />
                                <span> ¿Ya tienes cuenta?</span>
                                <button onClick={handleLoginClick}>Iniciar Sesion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

       


        </>
    );
}

export default Registrarse