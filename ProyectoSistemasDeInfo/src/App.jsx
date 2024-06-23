import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import InicioDeSesion from './Pages/InicioDeSesion/InicioDeSesion';
import Registrarse from './Pages/Registrarse/Registrarse'
import Contacto from './Pages/Contacto/Contacto';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import appFirebase from '../src/credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(appFirebase)
import IniciarAdmin from './Pages/InicioAdmin/InicioAdmin';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/Landing' element={<Landing />} />
          <Route path='/InicioDeSesion' element={<InicioDeSesion/>} /> 
          <Route path='/Registrarse' element={<Registrarse/>} />
          <Route path='/IniciarAdmin' element={<IniciarAdmin/>} />
          <Route path='/Contacto' element={<Contacto />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
