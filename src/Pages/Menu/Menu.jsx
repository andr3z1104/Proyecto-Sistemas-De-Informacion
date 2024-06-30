import styles from './Menu.module.css'
import image1 from '../../assets/Fondo-Menu.png';

import { useState } from 'react';


function Menu(){
    const [selectedValue, setSelectedValue] = useState('Option 1');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return(
    <>
        <div className={styles.topContainer}>
                <div><img className="Foto-Principal" src={image1} alt="imagen1" /> </div>
                <div className={styles.containerOverlay}></div>
                <div className={styles.containerCaption}>
                    <h3 className={styles.Text}>Perfecto para disfrutar y recargar energías</h3>
                </div>
        </div>

        <div className={styles.topsearchBar}>
            <div className={styles.searchBar}></div>
            <select className={styles.optionBar} value={selectedValue} onChange={handleChange}>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
            </select>
        </div>


    </>
    );
}

export default Menu;