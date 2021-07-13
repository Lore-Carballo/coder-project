import './styles.sass';
import { useState } from "react";

export const CartWidget = (props) => {
    return (
        <>
        <div className="minicart">
            <img src="/img/icon_cart.svg" alt="Products in cart" />
            <span>{props.cantidadCart}</span>
        </div>

        <div className="minicard__detail">
            <h5>{props.nameCart}</h5>
        </div>
        </>
    )
}