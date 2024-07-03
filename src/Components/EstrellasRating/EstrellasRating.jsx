import { FaStar } from 'react-icons/fa';
import styles from "./EstrellasRating.module.css";
import { useState } from 'react';

const StarRating = ({ rating, setRating }) => {
    const [hover, setHover] = useState(null);

    return (
        <div className={styles.starrating}>
            <div className={styles.star}>
                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                                style={{ display: 'none' }}
                            />
                            <FaStar
                                size={50}
                                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                                style={{ cursor: 'pointer', transition: 'color 200ms' }}
                            />
                        </label>
                    );
                })}
            </div>

            <div className={styles.Text}>
                <span>Pésima</span>
                <span>Excelente</span>
            </div>
        </div>
    );
};

export default StarRating;
