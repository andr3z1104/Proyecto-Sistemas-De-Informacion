import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import InicioDeSesion from './Pages/InicioDeSesion/InicioDeSesion';
import Registrarse from './Pages/Registrarse/Registrarse';
import Contacto from './Pages/Contacto/Contacto';
import Nosotros from './Pages/Nosotros/Nosotros';
import MiPerfil from './Pages/MiPerfil/MiPerfil';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import IniciarAdmin from './Pages/InicioAdmin/InicioAdmin';

import Menu from './Pages/Menu/Menu'
import Carrito from './Pages/Carrito/Carrito';

function App() {


  return (
    <Router>
      <AppRoutes />
    </Router>
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
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/MiPerfil' element={<MiPerfil />} />
        

        <Route path='/Carrito' element={<Carrito />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;