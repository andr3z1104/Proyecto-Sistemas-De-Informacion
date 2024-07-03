import styles from "./Feedback.module.css";
import global from "../../Global.module.css";
import image1 from "../../assets/ImagenPrincipal.png";
import StarRating from "../../Components/EstrellasRating/EstrellasRating";
import { useState } from "react";

function Feedback() {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "comentario") setComment(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del comentario y el rating
        console.log("Comentario:", comment);
        console.log("Rating:", rating);
        // Resetear campos después del envío si es necesario
        setComment("");
        setRating(0);
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
        </div>
    );
}

export default Feedback;
