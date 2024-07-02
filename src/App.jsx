import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import InicioDeSesion from './Pages/InicioDeSesion/InicioDeSesion';
import Registrarse from './Pages/Registrarse/Registrarse';
import Contacto from './Pages/Contacto/Contacto';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import IniciarAdmin from './Pages/InicioAdmin/InicioAdmin';
import Menu from './Pages/Menu/Menu'
import Carrito from './Pages/Carrito/Carrito';
import dataProducts from '../../appData';



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
  const onAddn = (producto) => {
      const exist = cartItems.find(x => x.ID === producto.ID);
      if (exist) {
          setCartItems(cartItems.map(x => x.ID === producto.ID ? {...exist, cantidad: exist.cantidad +1 } : x

          ));
      } else {
          setCartItems([...cartItems, {...producto, cantidad: 1 }]);
      }
          
  };

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
        <Route path='/Menu' element={<Menu onAddn={onAddn} />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='/Carrito' element={<Carrito onAddn={onAddn}  />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;