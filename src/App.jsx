import { BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import InicioDeSesion from './Pages/InicioDeSesion/InicioDeSesion';
import Registrarse from './Pages/Registrarse/Registrarse';
import Contacto from './Pages/Contacto/Contacto';
import Nosotros from './Pages/Nosotros/Nosotros';
import MiPerfil from './Pages/MiPerfil/MiPerfil';
import Feedback from './Pages/Feedback/Feedback';


import PopupPedidoProceso from "./Components/Popup/PopupPedidoProceso"
import PopupCerrarSesion from "./Components/Popup/PopupCerrarSesion";
import PopupInicioSesion from "./Components/Popup/PopupInicioSesion";
import PopupRegistro from "./Components/Popup/PopupRegistro";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import IniciarAdmin from './Pages/InicioAdmin/InicioAdmin';
import ProductoDetalles from './Pages/ProductoDetalles/ProductoDetalles';

import Menu from './Pages/Menu/Menu'
import Carrito from './Pages/Carrito/Carrito';

import dataProducts from './appData';
import { useState } from 'react';
import HeaderIS from './Components/HeaderIS/HeaderIS';


function App() {



  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {

  const {products} = dataProducts;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (producto) => {
      const exist = cartItems.find(x => x.ID === producto.ID);
      if (exist) {
          setCartItems(cartItems.map(x => x.ID === producto.ID ? {...exist, cantidad: exist.cantidad +1 } : x
          ));
      } else {
          setCartItems([...cartItems, {...producto, cantidad: 1 }]);
      }
  };

  const hideLoginButtonRoutes = ['/Registrarse','/InicioDeSesion','/IniciarAdmin,'];
  const shouldHideLoginButton = hideLoginButtonRoutes.includes(useLocation().pathname);

  return (
    <>
      { <Header showLoginButton={!shouldHideLoginButton} />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/InicioDeSesion' element={<InicioDeSesion />} />
        <Route path='/Registrarse' element={<Registrarse />} />
        <Route path='/IniciarAdmin' element={<IniciarAdmin />} />
        <Route path='/Menu' element={<Menu onAdd={onAdd} />} />
        <Route path='/Contacto' element={<Contacto />} />

        <Route path='/ProductoDetalles/:id' element={<ProductoDetalles />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/MiPerfil' element={<MiPerfil />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/HeaderIS' element={<HeaderIS />} />
        <Route path= "/PopupInicioSesion" element={<PopupInicioSesion />} />
        <Route path= "/PopupRegistro" element={<PopupRegistro />} />
        <Route path= "/PopupCerrarSesion" element={<PopupCerrarSesion />} />
        <Route path= "/PopupPedidoProceso" element={<PopupPedidoProceso />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;