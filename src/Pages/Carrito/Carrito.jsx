import styles from './Carrito.module.css';
import image1 from '../../assets/fondoCarrito.png';
import logoCarrito from '../../assets/logoPedido.png'



import SwitchSelector from "react-switch-selector";


import { useContext, useEffect, useState } from 'react';

import { DataContext } from '../../Context/DataProvider';

import ProductoPedido from '../../Components/ProductoPedido/ProductoPedido'

import { PayPalButtons } from '@paypal/react-paypal-js';

function Carrito() {

    const value = useContext(DataContext);

    const [carrito, setCarrito] = value.carrito;

    const [total, setTotal] = value.total;

    const productos = value.productos

    const [selectedOption, setSelectedOption] = useState('');


    useEffect(() => {
        console.log('selectedOption:', selectedOption);

        let subtotal = 0;
        carrito.forEach((item) => {
          const producto = productos.find((p) => p.ID === item.ID);
          subtotal += producto.precio;
        });
        let shippingCost = 0;
        if (selectedOption === 'Delivery') {
          shippingCost = 8;
        }
        setTotal(subtotal + shippingCost);
      }, [carrito, productos, selectedOption]);
    
      useEffect(() => {
        console.log('selectedOption:', selectedOption);
      }, [selectedOption]);
    
      const onChange = (newValue) => {
        setSelectedOption(newValue.value);
        console.log(newValue)
      };
    

    console.log(carrito)

    const onClick = (e) => {
        e.preventDefault();
        alert("PÁGINA EN CONSTRUCCIÓN...");
    };


    const options = [
        {
            label: <span>Foo</span>,
            value: {
            foo: true
            },
            selectedBackgroundColor: "#ff8a00",
        },
        {
            label: "Bar",
            value: "bar",
            selectedBackgroundColor: "#fbc531"
        }
    ];
    
    //const onChange = (newValue) => {
    //    console.log(newValue);
    //};
    
    const initialSelectedIndex = options.findIndex(({value}) => value === "bar");
    
    
    return (
        <div className='Carrito'>
            <div className={styles.topContainer}>

                <div><img className={styles.Panescss} src={image1} alt="imagen1" /></div>
                <div className={styles.containerOverlay}></div>
                <div className={styles.containerCaption}>
                    <h3 className={styles.Text}>Tu pedido</h3>
                    <div style={{ height: 70, width: 700}}>
                    <SwitchSelector
                        backgroundColor="#a6a6a6"
                        border={{}}
                        initialSelectedIndex={1}
                        fontSize={17}
                        name="botonseleccion"
                        onChange={onChange}
                        optionBorderRadius={{}}
                        options={[
                        {
                            label: 'Delivery',
                            value: 'Delivery'
                        },
                        {
                            label: 'Pick-up',
                            value: 'Pick-up'
                        }
                        ]}
                    selectedBackgroundColor="#ff8a00"
                    wrapperBorderRadius={{}}
                    />
                    </div>
                </div>
            </div>

            <div className={styles.contactContainer}>
                <div className={styles.spacer}>
                    <div className={styles.contact}>
                    {carrito.length >= 0 ? ( carrito.map((ID) => (
                    <ProductoPedido key={ID} id={ID} />
                    ))) : (
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
                            <p className={styles.unrDesc}>Precio Productos ----------------------- ${total - (selectedOption === 'Delivery' ? 8 : 0)}</p>
                            <p className={styles.unrDesc}>Precio Envío ----------------------------- {selectedOption === 'Delivery' ? '$8' : 'Gratis'}</p>
                        </div>

                    </div>

                    <div className={styles.subtotalContenedor}>
                            <h3> Subtotal </h3>
                            <div className={styles.subtotalPrecio}>
                                <p> ${total - (selectedOption === 'Delivery' ? 8 : 0)} </p>
                            </div>
                    </div>

                    <div className={styles.logoCarrito}>
                            
                                <img src={logoCarrito} alt='Carrito'></img>
                            
                    </div>

                </div>
            </div>
        </div>

            
            <div className={styles.sSpace}>
                <div className={styles.paypal}>
                <PayPalButtons />
                </div>
                <button className={styles.navButton} onClick={onClick}>----------Pagar----------</button>
            </div>
            
            
        </div>
        
    );
}

export default Carrito;