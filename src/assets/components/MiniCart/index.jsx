import './styles.sass';
import { useState } from "react";

export const MiniCart = () => {
    const cartInicial = 0;
    const [cart, setCart] = useState([cartInicial]);
    return (
        <div className="minicart">
            <img src="/img/icon_cart.svg" alt="Products in cart" />
            <span>{cart}</span>
        </div>
    )
}