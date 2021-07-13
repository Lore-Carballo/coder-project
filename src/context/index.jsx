import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();
const {Provider} = ShopContext;

export const CartContext = ({children}) => {
    const [cart, setCart] = useState([])
    // --> Agregar cantidad al Carrito
    const [cantidadRequerida, setcantidadRequerida] = useState(0);

    const onAdd = (item) => {
        setCart([...cart, item])
    }
    useEffect(()=> {
        setcantidadRequerida(cart.length)
    },[cart])
    

    return (
        <Provider value={{onAdd, cart, setCart, cantidadRequerida}}>
            {children}
        </Provider>
    )
}

// export const CartContext = ({children}) => {
//     const [cart, setCart] = useState([])

    

//     return <ShopContext.Provider value={{}}>
//         {children}
//     </ShopContext.Provider>
// }