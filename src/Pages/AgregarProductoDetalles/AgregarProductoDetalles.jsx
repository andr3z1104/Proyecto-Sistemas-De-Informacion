import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AgregarProductoDetalles.module.css';
import DropzoneComponent from '../../Components/DropzoneComponent/DropzoneConponent';
import dataProducts from '../../appData';

function AgregarProductoDetalles() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [img, setImg] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const [nombreIngrediente, setNombreIngrediente] = useState('');
  const [contraIndica, setContraIndica] = useState('');

  const handleImageUpload = (file) => {
    setImg(file.name);
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  const agregarIngrediente = () => {
    if (nombreIngrediente.trim() !== '') {
      setIngredientes([...ingredientes, { nombreIngred: nombreIngrediente, contraIndica }]);
      setNombreIngrediente('');
      setContraIndica('');
    }
  };

  const eliminarIngrediente = (index) => {
    const nuevosIngredientes = ingredientes.filter((_, i) => i !== index);
    setIngredientes(nuevosIngredientes);
  };

  const obtenerNuevoID = () => {
    if (dataProducts.length === 0) return 1;
    const ultimoID = dataProducts[dataProducts.length - 1].ID;
    return ultimoID + 1;
  };

  const handleSubmit = () => {
    const nuevoProducto = {
      ID: obtenerNuevoID(),
      nombre,
      categoria,
      descripcion,
      precio: parseFloat(precio),
      img: `/src/assets/${img}`,
      ingredientes,
    };

// dataProducts CONTIENE LA LISTA DE PRODUCTOS A ACTUALIZAR

    dataProducts.push(nuevoProducto);
    console.log(dataProducts); // Aquí puedes manejar el envío del nuevo producto o navegación

    // Resetear los estados
    setNombre('');
    setDescripcion('');
    setPrecio('');
    setCategoria('');
    setImg('');
    setIngredientes([]);
    setNombreIngrediente('');
    setContraIndica('');
  };

  return (
    <div className={styles.app_container}>
      <div className={styles.two_parts}>
        <div className={styles.back_layer}>
          <div className={styles.inside_background}>
            <div className={styles.image_container}>
              <DropzoneComponent className={styles.zone} onImageUpload={handleImageUpload} />
            </div>
          </div>
          <div className={styles.details_container}>
            <h2>Descripción</h2>
            <textarea
              className={styles.small_text}
              placeholder="Indique la descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows={Math.max(3, descripcion.split('\n').length)}
            />
          </div>
        </div>
        <div className={styles.back_layer}>
          <div className={styles.product_info}>
            <h3>Nombre del Producto</h3>
            <input
              className={styles.small_text}
              type="text"
              placeholder="Indique el nombre..."
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <div className={styles.menu_price_container}>
              <div className={styles.space_price}>
                <h4>Precio</h4>
                <input
                  className={styles.small_textp}
                  type="number"
                  placeholder="$..."
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </div>
              <div className={styles.space_class}>
                <h4>Tipo de Menú</h4>
                <input
                  className={styles.small_textp}
                  type="text"
                  placeholder="Desayuno..."
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                />
              </div>
            </div>
            <h2>Ingredientes</h2>
            <input
              className={styles.small_text}
              type="text"
              placeholder="Nombre del ingrediente"
              value={nombreIngrediente}
              onChange={(e) => setNombreIngrediente(e.target.value)}
            />
            <input
              className={styles.small_text}
              type="text"
              placeholder="Contraindicaciones"
              value={contraIndica}
              onChange={(e) => setContraIndica(e.target.value)}
            />
            <button onClick={agregarIngrediente} className={styles.confirm}>Agregar Ingrediente</button>
            <ul>
              {ingredientes.map((ingrediente, index) => (
                <li key={index}>
                  {ingrediente.nombreIngred} {ingrediente.contraIndica && `(${ingrediente.contraIndica})`}
                  <button onClick={() => eliminarIngrediente(index)} className={styles.delete}>Eliminar</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button onClick={handleSubmit} className={styles.submit}>Agregar Producto</button>
      <Link to="/Menu" className={styles.link}>
        <button className={styles.delete}>Cancelar</button>
      </Link>
    </div>
  );
}

export default AgregarProductoDetalles;
