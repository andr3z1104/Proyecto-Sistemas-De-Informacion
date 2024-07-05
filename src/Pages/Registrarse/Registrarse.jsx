import styles from "./Registrarse.module.css";
import googleLogo from "../../assets/google-svgrepo-com.svg";
import facebookLogo from "../../assets/facebook-svgrepo-com.svg";
import loggoToggle from "../../assets/logo-toggle.png";
import PopupInfo from "../../Components/Popup/PopupRegistro";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useState } from "react";

import appFirebase from "../../credenciales";

import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import PopupCondiciones from "../../Components/Popup/PopupCondiciones";

const db = getFirestore(appFirebase);
const auth = getAuth(appFirebase); // Autenticación de la app

function Registrarse() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [verifypassword, setVerifyPassword] = useState("");

  const [showPopUp, setShowPopUp] = useState(false);
  const [showPopUp1, setShowPopUp1] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "lastname") setLastName(value);
    if (name === "email") setEmail(value);
    if (name === "contraseña") setPassword(value);
    if (name === "vcontraseña") setVerifyPassword(value);
    if (name === "phone") setPhone(value);
  };

  const handleRegisterButton = async (e) => {
    e.preventDefault();

    // Verificar que las contraseñas coincidan
    if (password !== verifypassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Verificar dominio de correo
    const emailParts = email.split("@");
    const domain = emailParts[1];
    if (domain !== "correo.unimet.edu.ve" && domain !== "unimet.edu.ve") {
      alert("Correo inválido. Dominio incorrecto.");
      return;
    }

    try {
      const usersRef = collection(db, "users");
      const emailQuery = query(usersRef, where("email", "==", email));
      const phoneQuery = query(usersRef, where("phone", "==", phone));

      const emailExist = await getDocs(emailQuery);
      const phoneExist = await getDocs(phoneQuery);

      if (!emailExist.empty) {
        alert(
          "El correo ya está registrado. Verifique sus datos o inicie sesión."
        );
        return;
      }

      if (!phoneExist.empty) {
        alert(
          "El teléfono ya está registrado. Verifique sus datos o inicie sesión."
        );
        return;
      }

      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await addDoc(collection(db, "users"), {
        uid: newUser.user.uid,
        name: name,
        lastName: lastName,
        phone: phone,
        email: email,
      });
      setShowPopUp(true);
    } catch (error) {
      alert("ERROR. Asegúrese de que ingresó los datos correctamente");
      console.error("Error during registration:", error);
    }
  };

  const handleLoginClick = () => {
    window.location.href = "/InicioDeSesion";
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await createUserDocument(user);
      setShowPopUp(true);
    } catch (error) {
      console.error("Error al registrarse con Google:", error);
    }
  };

  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await createUserDocument(user);
      setShowPopUp(true);
    } catch (error) {
      console.error("Error al registrarse con Facebook:", error);
    }
  };

  const createUserDocument = async (user) => {
    const userDoc = query(
      collection(db, "users"),
      where("uid", "==", user.uid)
    );
    const userDocSnapshot = await getDocs(userDoc);

    if (userDocSnapshot.empty) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName || "",
        lastName: "",
        phone: user.phoneNumber || "",
        email: user.email,
      });
    }
  };

  const onClick1 = (e) => {
    e.preventDefault();
    setShowPopUp1(true);
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={`${styles["form-container"]} ${styles["sign-up"]}`}>
          <form>
            <h1>Crear Cuenta</h1>
            <div className={styles.socialMedia}>
              <img src={googleLogo} alt="Google" onClick={handleGoogleSignIn} />
              <img
                src={facebookLogo}
                alt="Facebook"
                onClick={handleFacebookSignIn}
              />
            </div>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Nombre"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastname"
              value={lastName}
              placeholder="Apellido"
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              placeholder="Correo"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <input
              name="phone"
              value={phone}
              placeholder="Telefono"
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="contraseña"
              value={password}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              placeholder="Verificar Contraseña"
              name="vcontraseña"
              value={verifypassword}
              onChange={handleInputChange}
              required
            />
            <span className={styles.condiciones}>
              Al Registrarse, aceptas las{" "}
              <a href="/CondicionesDeUso" onClick={onClick1}>
                Condiciones de uso
              </a>{" "}
              de Granier
            </span>
            <button onClick={handleRegisterButton}>Registrarse</button>
          </form>
        </div>
        <div className={styles["toggle-container"]}>
          <div className={styles["toggle"]}>
            <div
              className={`${styles["toggle-panel"]} ${styles["toggle-right"]}`}
            >
              <img src={loggoToggle} alt="Logo Toggle" />
              <span> ¿Ya tienes cuenta?</span>
              <button onClick={handleLoginClick}>Iniciar Sesion</button>
            </div>
          </div>
        </div>
      </div>
      {showPopUp && <PopupInfo onClose={() => setShowPopUp(false)} />}
      {showPopUp1 && <PopupCondiciones onClose={() => setShowPopUp1(false)} />}
    </div>
  );
}

export default Registrarse;
