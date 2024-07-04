import { createContext, useState, useEffect } from "react";
import dataProducts from "../appData";

export const DataContext = createContext();

export const DataProvider = (props) => {

	const [carrito, setCarrito] = useState( [] )
    const [total, setTotal] = useState(0)


	console.log(carrito)

    const onAdd = (ID) => {
        setCarrito(currentCarrito => [...currentCarrito, { 'ID': ID }]);
    }

    const value = {
        productos: dataProducts,
		carrito: [carrito, setCarrito],
		addCarrito: onAdd,
        total: [total, setTotal],
	}

	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};