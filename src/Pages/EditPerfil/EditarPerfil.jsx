import styles from "./EditarPerfil.module.css";
import { useState } from "react";
import { useUser } from "../../Controllers/UserContext";
import { updateProfile } from "../../Controllers/user"; // Asegúrate de importar correctamente la función updateProfile
import { useNavigate } from "react-router-dom";

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
          <label>Nombre:</label>
          <input
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.campo}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.campo}>
          <label>Teléfono:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.campo}>
          <label>Fecha de Nacimiento:</label>
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default EditarPerfil;
