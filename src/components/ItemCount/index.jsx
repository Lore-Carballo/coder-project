import './styles.sass';
import { useState } from "react";

export const ItemCount = (props) => {
    const cantidadInicial = 1;
    const [cantidad, setCantidad] = useState(cantidadInicial);
    // const [cantidadDisponible, setCantidadDisponible] = useState(Number(props.stockProducto));
    const [cantidadMaxima, setCantidadMaxima] = useState(null);

    const restarCantidad = () => {
        if(cantidad === 0){
            return;  
        }
        setCantidad(cantidad - 1);
    };
    const sumarCantidad = () => {
        if(cantidad === Number(props.stockProducto)){
            alert("¡Stock insuficiente! Momentáneamente contamos con " + Number(props.stockProducto) + " unidades de este producto.");
            return;            
        }
        setCantidad(cantidad + 1);
        setCantidadMaxima(cantidad + 1);
    };

    return (
        <>
            <div className="stock">
                Stock: {props.stockProducto}
            </div>

            {/* {!cantidadMaxima ?  */}
                <div className="item-count">
                    <button disabled={cantidad === 1} className="counter-btn" onClick={restarCantidad}>-</button>
                    <div className="counter-cantidad">{cantidad}</div>
                    <button className="counter-btn" onClick={sumarCantidad}>+</button>
                </div> 
            {/* :  */}
            {/* <button className="btn checkout">Terminar Compra</button>} */}
            
        </>
    )
}