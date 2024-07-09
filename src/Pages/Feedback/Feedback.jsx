import styles from "./Feedback.module.css";
import global from "../../Global.module.css";
import image1 from "../../assets/ImagenPrincipal.png";
import StarRating from "../../Components/EstrellasRating/EstrellasRating";
import { useState } from "react";
import { db } from "../../credenciales";
import { collection, addDoc } from "firebase/firestore";
import PopupInfo from "../../Components/Popup/PopupFeedback"; // Asegúrate de que la ruta sea correcta

function Feedback() {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [showPopup, setShowPopup] = useState(false); // Estado para controlar el pop-up

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "comentario") setComment(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rating === 0) {
            alert("Por favor selecciona una calificación.");
            return;
        }
        const comentario = comment ? comment : "No hay comentario disponible";
        try {
            await addDoc(collection(db, "comentarios"), {
                comentario: comentario,
                estrellas: rating
            });
            console.log("Comentario enviado:", comentario);
            console.log("Rating enviado:", rating);
            setComment("");
            setRating(0);
            setShowPopup(true); // Mostrar el pop-up
        } catch (error) {
            console.error("Error al enviar el comentario:", error);
            alert("Hubo un error al enviar tu comentario. Por favor, intenta de nuevo.");
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false); // Cerrar el pop-up
    };

    return (
        <div className={styles.feedbackPage}>
            <div className={styles.topContainer}>
                <img className={styles.fotaca} src={image1} alt="imagen1" />
                <div className={styles.containerOverlay}></div>
                <div className={styles.containerCaption}>
                    <h3 className={styles.Text}>Es imposible resistirse al sabor del café recién hecho</h3>
                </div>
            </div>

            <div className={styles.contenedorFb}>
                <div className={styles.headerFb}>
                    <h2 className={styles.headerFb_titulo}>¡Tu opinión es importante!</h2>
                    <p className={styles.headerFb_parrafo}>Apreciamos tu opinión acerca de nuestros productos y servicios</p>
                </div>

                <div className={styles.contenedorRating}>
                    <h2 className={styles.ratingTitulo}>¿Qué tal fue tu experiencia en Granier?</h2>
                    <div className={styles.ratingEstrellas}>
                        <StarRating rating={rating} setRating={setRating} />
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={styles.comentarioFb}>
                        <span><b>Mensaje adicional </b></span><span>(opcional)</span>
                        <textarea name="comentario" value={comment} onChange={handleInputChange} className={styles.textArea}></textarea>
                    </div>
                    <button type="submit" className={`${global.boton} ${styles.navButton}`}> ENVIAR </button>
                </form>
            </div>

            {showPopup && <PopupInfo onClose={handleClosePopup} />}
        </div>
    );
}

export default Feedback;
