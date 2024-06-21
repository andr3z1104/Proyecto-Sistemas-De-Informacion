import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import InicioDeSesion from './Pages/InicioDeSesion/InicioDeSesion';
import Contacto from './Pages/Contacto/Contacto';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/Landing' element={<Landing />} />
          <Route path='/InicioDeSesion' element={<InicioDeSesion />} /> 
          <Route path='/Contacto' element={<Contacto />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
