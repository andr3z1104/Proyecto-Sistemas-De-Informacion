import styles from './Menu.module.css';
import image1 from '../../assets/fondoMenu.jpg';
import logo from '../../assets/logo-toggle.png';
import CaruselMenu from '../../Components/CaruselMenu/CaruselMenu';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/DataProvider';
import { useUser } from '../../Controllers/UserContext';
import useCart from '../../hooks/useCart';

function Menu() {
    const { user } = useUser();
    const { cart } = useCart();
    const value = useContext(DataContext);
    const productos = value.productos;
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Option 0');

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = () => {
        return productos.filter((product) => {
            const matchesSearchTerm = product.nombre.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'Option 0' || product.categoria === selectedCategory;
            return matchesSearchTerm && matchesCategory;
        });
    };

    const showCarousel = (titulo) => {
        return filteredProducts().some((product) => product.categoria === titulo);
    };

    return (
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
                <select className={styles.optionBar} value={selectedCategory} onChange={handleChange}>
                    <option value="Option 0">Ninguno</option>
                    <option value="Panes">Panes</option>
                    <option value="Frappe">Frappe</option>
                    <option value="Cafe">Cafe</option>
                </select>
            </div>

            <div className={styles.contenedor}>
                {user != null && user?.email !== "admin@granierunimet.com" && (
                    <Link to={`/Carrito`} className={styles.imagenCarrito}>
                        <img src={logo} alt='Carrito'></img>
                        {cart && cart.products.length > 0 && (
                            <div className={styles.cartBadge}>{cart.products.length}</div>
                        )}
                    </Link>
                )}
            </div>

            {showCarousel('Panes') && <CaruselMenu titulo="Panes" />}
            {showCarousel('Frappe') && <CaruselMenu titulo="Frappe" />}
            {showCarousel('Cafe') && <CaruselMenu titulo="Cafe" />}
        </>
    );
}

export default Menu;
