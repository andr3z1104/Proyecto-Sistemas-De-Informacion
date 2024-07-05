import { createContext, useEffect, useState } from "react";
import { getProducts } from "../Controllers/files";

export const MenuContext = createContext();

function MenuProvider({children}){
    const [menu, setMenu] = useState([]);

    // Para que lo haga una sola vez
    useEffect(() => {
        const getMenu = async () => {
            const products = await getProducts();
            setMenu(products)
        };
        getMenu();
    }, []);
    return <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>;
    
}
export default MenuProvider;