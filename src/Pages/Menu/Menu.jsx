import styles from './Menu.module.css'
import image1 from '../../assets/fondoMenu.jpg';
import logo from '../../assets/logo-toggle.png'


import CaruselMenu from '../../Components/CaruselMenu/CaruselMenu';


import { useState, useContext } from 'react';
import { goOffline } from 'firebase/database';

import { Link } from 'react-router-dom';

import { DataContext } from '../../Context/DataProvider';
import { useUser } from '../../Controllers/UserContext';


function Menu(){
    const { user } = useUser();

    const value = useContext(DataContext);

    const productos = value.productos

    const [searchTerm, setSearchTerm] = useState('');

    const [selectedValue, setSelectedValue] = useState('Option 1');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };

      const filteredProducts = () => {
        return productos.filter((product) => {
          return product.nombre.toLowerCase().includes(searchTerm.toLowerCase());
        });
      };

      const showCarousel = (titulo) => {
        if (searchTerm === '') {
          return true;
        } else {
          return filteredProducts().some((product) => product.categoria === titulo);
        }
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
                <input placeholder='Buscar...' value={searchTerm} onChange={handleSearch}></input>
            </div>
            <select className={styles.optionBar} value={selectedValue} onChange={handleChange}>
                <option value="Option 0">Ninguno</option>
                <option value="Option 1">Panes</option>
                <option value="Option 2">Frappe</option>
                <option value="Option 3">Cafe</option>
            </select>
        </div>

        
        <div className={styles.contenedor}>
            {user != null && user?.email != "admin@granierunimet.com" && <Link  to={`/Carrito`}  className={styles.imagenCarrito}>
                <img src={logo} alt='Carrito'></img>
            </Link>}
        </div>

        {filteredProducts().map((product) => (
        <div key={product.name}>{product.name}</div>
      ))}

       
            {showCarousel('Panes') && <CaruselMenu titulo="Panes" />}
      {showCarousel('Frappe') && <CaruselMenu titulo="Frappe" />}
      {showCarousel('Cafe') && <CaruselMenu titulo="Cafe" />}

    </>
    );
}

export default Menu;