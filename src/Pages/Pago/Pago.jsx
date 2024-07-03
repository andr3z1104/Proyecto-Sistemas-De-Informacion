import styles from './Pago.module.css';
import image1 from '../../assets/fondoCarrito.png';
import logoCarrito from '../../assets/logoPedido.png'

import SwitchSelector from "react-switch-selector";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import dataProducts from '../../appData';
import ProductoPedido from '../../Components/ProductoPedido/ProductoPedido'

function Pago() {

    
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
     
    const onChange = (newValue) => {
        console.log(newValue);
    };
     
    const initialSelectedIndex = options.findIndex(({value}) => value === "bar");
     
    const navigate = useNavigate();

    return (
        <div className='Carrito'>
            <div className={styles.topContainer}>

                <div><img className={styles.Panescss} src={image1} alt="imagen1" /></div>
                <div className={styles.containerOverlay}></div>
                <div className={styles.containerCaption}>
                    <h3 className={styles.Text}>Tu Metodo de pago</h3>
                    <div
                      style={{
                        height: 70,
                        width: 700
                      }}
                     >
                      <SwitchSelector
                        backgroundColor="#a6a6a6"
                        border={{}}
                        initialSelectedIndex={1}
                        fontSize={17}
                        name="botonseleccion"
                        onChange={function noRefCheck(){}}
                        optionBorderRadius={{}}
                        options={[
                          {
                            label: 'Paypal',
                            value: true
                          },
                          {
                            label: 'Efectivo',
                            value: 20
                          }
                        ]}
                        selectedBackgroundColor="#ff8a00"
                        wrapperBorderRadius={{}}
                      />
                    </div>
                </div>
            </div>

                            

        <div className={styles.totalPagar}>
                <div className={styles.spacer}>

                <div className={styles.allignSide}>

                    <div className={styles.feedback}>

                        <div className={styles.resumenPedido}>
                            <h2>Resumen de tu pedido</h2>
                            <p className={styles.unrDesc}>Precio Productos ----------------------- $15</p>
                            <p className={styles.unrDesc}>Precio Envío ----------------------------- $8</p>
                        </div>

                    </div>

                    <div className={styles.subtotalContenedor}>
                            <h3> Subtotal </h3>
                            <div className={styles.subtotalPrecio}>
                                <p> $15 </p>
                            </div>
                    </div>

                    <div className={styles.logoCarrito}>
                            
                                <img src={logoCarrito} alt='Carrito'></img>
                            
                    </div>

                </div>
            </div>
        </div>

            
            <div className={styles.sSpace}>
               <button className={styles.navButton} onClick={onClick}>----------Pagar----------</button>
            </div>
            
            
        </div>
        
    );
}

export default Pago;