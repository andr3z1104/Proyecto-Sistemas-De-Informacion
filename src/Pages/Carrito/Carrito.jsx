import styles from './Carrito.module.css';
import image1 from '../../assets/Panes.jpg';
import { useNavigate } from 'react-router-dom';
import whatsapp from '../../assets/WhatsappLogo.png'
import instagram from '../../assets/InstagramLogo.png'
import SwitchSelector from "react-switch-selector";
import { useState } from 'react';
import dataProducts from '../../appData';

function Carrito() {


    



    
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
                    <h3 className={styles.Text}>Tu pedido</h3>
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
        label: 'Delivery',
        value: true
      },
      {
        label: 'Pick-up',
        value: 20
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
                        <h2>CONTÁCTANOS</h2>
                        <div className={styles.group}>
                            <img src={whatsapp} alt="Logo" className={styles.image} />
                            <p className={styles.desc}> 424-2086718</p>
                        </div>
                        <div className={styles.group}>
                            <img src={instagram} alt="Logo" className={styles.image} />
                            <a href='https://www.instagram.com/graniervzla?igsh=MXZ3Nm04N2VoZ3Z3Ng==' className={styles.desc}> @granier_unimet</a>
                        </div>
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.visit}>
                        <h2>VISÍTANOS</h2>
                        <p className={styles.unrDesc}>Sede Unimet. Encuéntranos en la Universidad Metropolitana de Caracas. Justo al lado del Edificio Corimon.</p>
                        <p className={styles.unrDesc}>De Lunes a Viernes. Desde las 7:00am hasta las 7:00pm</p>
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.feedback}>
                        <h2>DUDAS U OPINIONES</h2>
                        <p className={styles.unrDesc}>Nos importa saber cómo podemos mejorar tu experiencia Granier. Recuerda que somos el sabor que te acompaña en cada estudio.</p>
                        <div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>








            <div className={styles.contactContainer}>
                <div className={styles.spacer}>
                    
            
                    <div className={styles.feedback}>
                        <h2>Resumen de tu pedido</h2>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <h2 >Subtotal</h2>
                        </div>
                        <p className={styles.unrDesc}>Precio Productos --------- </p>
                        <p className={styles.unrDesc}>Precio Envío -------------- </p>
                        <div>
                            
                            
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

export default Carrito;