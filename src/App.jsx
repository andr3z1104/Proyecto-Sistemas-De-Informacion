import { BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import InicioDeSesion from './Pages/InicioDeSesion/InicioDeSesion';
import Registrarse from './Pages/Registrarse/Registrarse';
import Contacto from './Pages/Contacto/Contacto';
import Nosotros from './Pages/Nosotros/Nosotros';
import MiPerfil from './Pages/MiPerfil/MiPerfil';
import Feedback from './Pages/Feedback/Feedback';
import MiPerfilAdmin from "./Pages/MiPerfilAdmin/MiPerfilAdmin";


import PopupPedidoProceso from "./Components/Popup/PopupPedidoProceso"
import PopupCerrarSesion from "./Components/Popup/PopupCerrarSesion";

import PopupRegistro from "./Components/Popup/PopupRegistro";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import IniciarAdmin from './Pages/InicioAdmin/InicioAdmin';
import ProductoDetalles from './Pages/ProductoDetalles/ProductoDetalles';

import Menu from './Pages/Menu/Menu'
import Carrito from './Pages/Carrito/Carrito';


import dataProducts from './appData';
import { useState, useEffect, useContext } from 'react';
import { DataProvider } from './Context/DataProvider';
import { useState } from 'react';
import HeaderIS from './Components/HeaderIS/HeaderIS';

import AppProvider from './Controllers/UserProvider';
import UserContext from './Controllers/UserContext';

function App() {

  const { logout } = useContext(UserContext);

  useEffect(() => {
    window.addEventListener('beforeunload', logout);
    return () => {
      window.removeEventListener('beforeunload', logout);
    };
  }, [logout]);



  return (
    <DataProvider>
      < AppProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AppProvider>
    </DataProvider>
  );
}

function AppRoutes() {

  const hideLoginButtonRoutes = ['/Registrarse','/InicioDeSesion','/IniciarAdmin'];

  const shouldHideLoginButton = hideLoginButtonRoutes.includes(useLocation().pathname);

  return (
    <>
      { <Header showLoginButton={!shouldHideLoginButton} />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/InicioDeSesion' element={<InicioDeSesion />} />
        <Route path='/Registrarse' element={<Registrarse />} />
        <Route path='/IniciarAdmin' element={<IniciarAdmin />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='/MiPerfilAdmin' element={<MiPerfilAdmin />} />

        

        <Route path='/ProductoDetalles/:id' element={<ProductoDetalles />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/MiPerfil' element={<MiPerfil />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/HeaderIS' element={<HeaderIS />} />

        <Route path= "/PopupRegistro" element={<PopupRegistro />} />
        <Route path= "/PopupCerrarSesion" element={<PopupCerrarSesion />} />
        <Route path= "/PopupPedidoProceso" element={<PopupPedidoProceso />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;