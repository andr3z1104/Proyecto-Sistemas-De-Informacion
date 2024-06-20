import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import InicioDeSesion from './Pages/InicioDeSesion/InicioDeSesion'
import Contacto from './Pages/Contacto/Contacto'

function App() {
  return(
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/Registro' element={<InicioDeSesion/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App
