// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import InicioDeSesion from "./Pages/InicioDeSesion/InicioDeSesion";
import Registrarse from "./Pages/Registrarse/Registrarse";
import Contacto from "./Pages/Contacto/Contacto";
import Nosotros from "./Pages/Nosotros/Nosotros";
import MiPerfil from "./Pages/MiPerfil/MiPerfil";
import EditarPerfil from "./Pages/EditPerfil/EditarPerfil";

import PopupCondiciones from "./Components/Popup/PopupCondiciones";
import PopupPedidoProceso from "./Components/Popup/PopupPedidoProceso";
import PopupCerrarSesion from "./Components/Popup/PopupCerrarSesion";
import PopupRegistro from "./Components/Popup/PopupRegistro";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import IniciarAdmin from "./Pages/InicioAdmin/InicioAdmin";
import ProductoDetalles from "./Pages/ProductoDetalles/ProductoDetalles";
import Feedback from "./Pages/Feedback/Feedback";

import AdminPerfil from "./Pages/MiPerfilAdmin/MiPerfilAdmin";
import AgregarProductoDetalles from "./Pages/AgregarProductoDetalles/AgregarProductoDetalles";

import Menu from "./Pages/Menu/Menu";
import Carrito from "./Pages/Carrito/Carrito";

import FichaPedido from "./Components/FichaPedido/FichaPedido";
import FichaComentario from "./Components/FichaComentario/FichaComentario";

import dataProducts from "./appData";
import { DataProvider } from "./Context/DataProvider";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { UserProvider } from "./Controllers/UserContext"; // Asegúrate de importar correctamente

function App() {
  const initialOptions = {
    clientId:
      "ASO1PRPDoPXzWHa7aE7polcVZzpeDriZ2Ry6OLzbDvDnaRdiwqP6mk-F8ZAzgZx5wjKWuf8E0vfkDIWu",
    currency: "USD",
    intent: "capture",
  };

  return (
    <DataProvider>
      <PayPalScriptProvider options={initialOptions}>
        <UserProvider>
          <Router>
            <AppRoutes />
          </Router>
        </UserProvider>
      </PayPalScriptProvider>
    </DataProvider>
  );
}

function AppRoutes() {
  const hideLoginButtonRoutes = [
    "/Registrarse",
    "/InicioDeSesion",
    "/IniciarAdmin",
  ];
  const shouldHideLoginButton = hideLoginButtonRoutes.includes(
    useLocation().pathname
  );

  return (
    <>
      {<Header showLoginButton={!shouldHideLoginButton} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/InicioDeSesion" element={<InicioDeSesion />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/IniciarAdmin" element={<IniciarAdmin />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/ProductoDetalles/:ID" element={<ProductoDetalles />} />
        <Route
          path="/AgregarProductoDetalles"
          element={<AgregarProductoDetalles />}
        />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/MiPerfil" element={<MiPerfil />} />
        <Route path="/EditarPerfil" element={<EditarPerfil />} />{" "}
        {/* Nueva ruta */}
        <Route path="/AdminPerfil" element={<AdminPerfil />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/PopupRegistro" element={<PopupRegistro />} />
        <Route path="/PopupCerrarSesion" element={<PopupCerrarSesion />} />
        <Route path="/PopupPedidoProceso" element={<PopupPedidoProceso />} />
        <Route path="/PopupCondiciones" element={<PopupCondiciones />} />
        <Route path = "/FichaPedido" element={<FichaPedido />}></Route>
        <Route path = "/FichaComentario" element={<FichaComentario />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
