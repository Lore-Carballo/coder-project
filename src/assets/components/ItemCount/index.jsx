import './styles.sass';
import { useState } from "react";

export const ItemCount = (props) => {
    const cantidadInicial = 1;
    const cantidadDisponible = props.stockProducto;
    const [cantidad, setCantidad] = useState(cantidadInicial);

    const restarCantidad = () => {
        if(cantidad === 0){
            return;  
        }
        setCantidad(cantidad - 1);
    };
    const sumarCantidad = () => {
        if(cantidad === cantidadDisponible){
            alert("Stock insuficiente");
            return;
            
        }
        setCantidad(cantidad + 1);
    };

    return (
        <>
            <div className="stock">
                Stock: {props.stockProducto}
            </div>
            <div className="item-count">
                <button disabled={cantidad === 1} className="counter-btn" onClick={restarCantidad}>-</button>
                <div className="counter-cantidad">{cantidad}</div>
                <button className="counter-btn" onClick={sumarCantidad}>+</button>
            </div>
        </>
    )
}