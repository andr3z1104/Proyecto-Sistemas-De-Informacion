import styles from "./Carrito.module.css";
import image1 from "../../assets/fondoCarrito.png";
import logoCarrito from "../../assets/logoPedido.png";

import SwitchSelector from "react-switch-selector";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataProvider";
import ProductoPedido from "../../Components/ProductoPedido/ProductoPedido";
import { PayPalButtons } from "@paypal/react-paypal-js";
import useCart from "../../hooks/useCart";

function Carrito() {
  const value = useContext(DataContext);
  const productos = value.productos;
  const { cart, loading } = useCart();
  const [total, setTotal] = useState(0);
  const [selectedOption, setSelectedOption] = useState("Pick-up"); // Inicializar selectedOption

  useEffect(() => {
    if (!cart || !productos) return;

    let subtotal = 0;
    cart.products.forEach((item) => {
      const producto = productos.find((p) => p.ID === item.ID);
      if (producto) {
        subtotal += producto.precio * item.quantity;
      }
    });

    let shippingCost = 0;
    if (selectedOption === "Delivery") {
      shippingCost = 8;
    }
    setTotal(subtotal + shippingCost);
  }, [cart, productos, selectedOption]);

  const onChange = (newValue) => {
    setSelectedOption(newValue.value);
  };

  const options = [
    {
      label: "Delivery",
      value: "Delivery",
      selectedBackgroundColor: "#ff8a00",
    },
    {
      label: "Pick-up",
      value: "Pick-up",
      selectedBackgroundColor: "#fbc531",
    },
  ];

  const updateCartState = (updatedCart) => {
    setCart(updatedCart);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Carrito">
      <div className={styles.topContainer}>
        <div>
          <img className={styles.Panescss} src={image1} alt="imagen1" />
        </div>
        <div className={styles.containerOverlay}></div>
        <div className={styles.containerCaption}>
          <h3 className={styles.Text}>Tu pedido</h3>
          <div style={{ height: 70, width: 700 }}>
            <SwitchSelector
              backgroundColor="#a6a6a6"
              border={{}}
              initialSelectedIndex={1}
              fontSize={17}
              name="botonseleccion"
              onChange={onChange}
              optionBorderRadius={{}}
              options={options}
              selectedBackgroundColor="#ff8a00"
              wrapperBorderRadius={{}}
            />
          </div>
        </div>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.spacer}>
          <div className={styles.contact}>
            {cart && cart.products.length > 0 ? (
              cart.products.map((item) => (
                <ProductoPedido
                  key={item.ID}
                  item={item}
                  productos={productos}
                  updateCartState={updateCartState}
                />
              ))
            ) : (
              <p>No items in cart</p>
            )}
          </div>
        </div>
      </div>

      <div className={styles.totalPagar}>
        <div className={styles.spacer}>
          <div className={styles.allignSide}>
            <div className={styles.feedback}>
              <div className={styles.resumenPedido}>
                <h2>Resumen de tu pedido</h2>
                <p className={styles.unrDesc}>
                  Precio Productos ----------------------- $
                  {total - (selectedOption === "Delivery" ? 8 : 0)}
                </p>
                <p className={styles.unrDesc}>
                  Precio Envío -----------------------------{" "}
                  {selectedOption === "Delivery" ? "$8" : "Gratis"}
                </p>
              </div>
            </div>
            <div className={styles.subtotalContenedor}>
              <h3> Subtotal </h3>
              <div className={styles.subtotalPrecio}>
                <p> ${total - (selectedOption === "Delivery" ? 8 : 0)} </p>
              </div>
            </div>
            <div className={styles.logoCarrito}>
              <img src={logoCarrito} alt="Carrito"></img>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sSpace}>
        <div className={styles.paypal}>
          <p>-- Método de Pago --</p>
          {cart.products.length > 0 &&  <PayPalButtons />}
        </div>
        
      </div>
    </div>
  );
}

export default Carrito;
