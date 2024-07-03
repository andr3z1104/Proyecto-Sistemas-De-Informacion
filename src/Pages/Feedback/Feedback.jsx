import styles from "./Feedback.module.css";
import global from "../../Global.module.css";

import image1 from "../../assets/ImagenPrincipal.png";
import StarRating from "../../Components/EstrellasRating/EstrellasRating";
import { useState } from "react";

function Feedback() {
    const [comment, setComment] = useState("");

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "comentario") setComment(value);
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // funcionalidad del comentario
    };

    return (
    <div className="feedbackPage">
        <div className={styles.topContainer}>
        <div>
            <img className={styles.fotaca} src={image1} alt="imagen1" />
        </div>
        <div className={styles.containerOverlay}></div>
        <div className={styles.containerCaption}>
            <h3 className={styles.Text}>
            Estamos a tu alcance, no te quedes sin probar un pedacito de Granier
            </h3>
        </div>
        </div>

        <div className={styles.contenedorFb}>
            <div className={styles.headerFb}>
                <h2 className={styles.headerFb_titulo}>¡Tu opinión es importante!</h2>
                <p className={styles.headerFb_parrafo}>
                Apreciamos tu opinión acerca de nuestros productos y servicios
                </p>
            </div>

            <div className={styles.contenedorRating}>
                <h2 className={styles.ratingTitulo}>¿Qué tal fue tu experiencia en Granier?</h2>
                <div className={styles.ratingEstrellas}>
                <StarRating />
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.comentarioFb}>
                    <textarea name="comentario" value={comment} onChange={handleInputChange} required></textarea>
                </div>
                    <button type="submit" className={`${global.boton} ${styles.navButton}`}>ENVIAR</button>
            </form>

        </div>
        
    </div>
);
}

export default Feedback;
