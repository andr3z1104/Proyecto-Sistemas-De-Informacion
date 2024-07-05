import styles from "./EditarPerfil.module.css";
import { useState } from "react";
import { useUser } from "../../Controllers/UserContext";
import { updateProfile } from "../../Controllers/user"; // Asegúrate de importar correctamente la función updateProfile
import { useNavigate } from "react-router-dom";
import global from "../../Global.module.css"

function EditarPerfil() {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    displayName: user.displayName || "",
    email: user.email || "",
    phone: user.phone || "",
    birthdate: user.birthdate || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user.email, formData); // Aquí usamos el correo electrónico
      updateUser(formData); // Actualizamos el estado del usuario en el contexto
      navigate("/MiPerfil");
    } catch (error) {
      alert("Error al actualizar el perfil");
    }
  };

  return (
    <div className={styles.contenedorPerfil}>
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div className={styles.campo}>
          <label className={styles.lable}>Nombre:</label>
          <input
            type="text"
            name="displayName"
            className={styles.input}

            value={formData.displayName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.campo}>
          <label className={styles.lable}
          >Email:</label>
          <input
            type="email"
            name="email"
            className={styles.input}

            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.campo}>
          <label className={styles.lable}>Teléfono:</label>
          <input
            type="text"
            name="phone"
            className={styles.input}

            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.campo}>
          <label className={styles.lable}>Fecha de Nacimiento:</label>
          <input
            type="date"
            name="birthdate"
            className={styles.input}
            value={formData.birthdate}
            onChange={handleChange}
          />
        </div>
        <button className={`${global.boton} ${styles.boton}`} type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default EditarPerfil;
