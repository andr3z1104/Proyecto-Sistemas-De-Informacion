import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import styles from './FichaComentario.module.css';
import { FaStar } from 'react-icons/fa';
import photoClient from '../../assets/FrameFicha.png';
import { db } from '../../credenciales';

function FichaComentario() {
    const [comentarioData, setComentarioData] = useState(null);

    useEffect(() => {
        const fetchComentarios = async () => {
            const comentariosCollection = collection(db, 'comentarios');
            const comentariosSnapshot = await getDocs(comentariosCollection);
            const comentariosList = comentariosSnapshot.docs.map(doc => doc.data());
            
            if (comentariosList.length > 0) {
                const randomComentario = comentariosList[Math.floor(Math.random() * comentariosList.length)];
                setComentarioData(randomComentario);
            }
        };

        fetchComentarios();
    }, []);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={styles.star}
                color={index < rating ? '#FFD700' : '#E0E0E0'}
            />
        ));
    };

    if (!comentarioData) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.fichaComentario}>
            <img className={styles.imageComentario} src={photoClient} alt="Usuario" />
            <div className={styles.dataContainer}>
                <div className={styles.rating}>
                    {renderStars(comentarioData.estrellas)}
                </div>
                <p className={styles.comentario}>{comentarioData.comentario}</p>
            </div>
        </div>
    );
}

export default FichaComentario;
