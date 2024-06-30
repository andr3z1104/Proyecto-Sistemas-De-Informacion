import styles from './Menu.module.css'
import image1 from '../../assets/fondoMenu.jpg';
import global from '../../Global.module.css'

import CaruselMenu from '../../Components/CaruselMenu/CaruselMenu';

import { useState } from 'react';
import { goOffline } from 'firebase/database';


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

        <div className={styles.topSearchBar}>
            <div className={styles.searchBar}>
                <input placeholder='Buscar...'></input>
            </div>
            <select className={styles.optionBar} value={selectedValue} onChange={handleChange}>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
            </select>
        </div>

        <div className={styles.titleContainer}>
            <h2> PANES </h2>
        </div>

        <CaruselMenu titulo = "Panes"/>
        <CaruselMenu titulo = "Frappe"/>
        <CaruselMenu titulo = "Cafe"/>
    </>
    );
}

export default Menu;