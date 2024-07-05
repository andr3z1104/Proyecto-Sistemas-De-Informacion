import { createContext, useState, useEffect } from "react";
import dataProducts from "../appData";

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    console.log(carrito);

    const onAdd = (ID) => {
        setCarrito(currentCarrito => {
            const productIndex = currentCarrito.findIndex(item => item.ID === ID);
            if (productIndex !== -1) {
                // Si el producto ya está en el carrito, incrementa la cantidad
                const newCarrito = [...currentCarrito];
                newCarrito[productIndex].cantidad += 1;
                return newCarrito;
            } else {
                // Si el producto no está en el carrito, añádelo con cantidad 1
                return [...currentCarrito, { ID: ID, cantidad: 1 }];
            }
        });
    }

    const value = {
        productos: dataProducts,
        carrito: [carrito, setCarrito],
        addCarrito: onAdd,
        total: [total, setTotal],
    };

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
};
