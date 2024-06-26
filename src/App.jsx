import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import InicioDeSesion from './Pages/InicioDeSesion/InicioDeSesion';
import Registrarse from './Pages/Registrarse/Registrarse';
import Contacto from './Pages/Contacto/Contacto';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import IniciarAdmin from './Pages/InicioAdmin/InicioAdmin';





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
        <Route path='/Contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;