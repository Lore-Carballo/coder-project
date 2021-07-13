import './styles.sass';
import { useState, useContext } from "react";
import { ShopContext } from '../../context';

export const ItemCount = ({stockProducto, item}) => {
    const {onAdd, cart} = useContext(ShopContext);

    // --> Cantidad de Productos del contador
    const cantidadInicial = 1;
    const [cantidad, setCantidad] = useState(cantidadInicial);
    // const [cantidadDisponible, setCantidadDisponible] = useState(Number(props.stockProducto));
    //const [cantidadMaxima, setCantidadMaxima] = useState(null);

    const restarCantidad = () => {
        if(cantidad === 0){
            return;  
        }
        setCantidad(cantidad - 1);
    };
    const sumarCantidad = () => {
        if(cantidad === Number(stockProducto)){
            alert("¡Stock insuficiente! Momentáneamente contamos con " + Number(stockProducto) + " unidades de este producto.");
            return;            
        }
        setCantidad(cantidad + 1);
        //setCantidadMaxima(cantidad + 1);
    };

    return (
        <>
            <div className="stock">
                Stock: {stockProducto}
            </div>

            <div className="item-count">
                <button disabled={cantidad === 1} className="counter-btn" onClick={restarCantidad}>-</button>
                <div className="counter-cantidad">{cantidad}</div>
                <button className="counter-btn" onClick={sumarCantidad}>+</button>
            </div> 

            <button className="btn add-cart" onClick={()=>{onAdd(item)}}>
                Agregar al Carrito
            </button>

            {/* {!cantidadMaxima ? 
                <div className="item-count">
                    <button disabled={cantidad === 1} className="counter-btn" onClick={restarCantidad}>-</button>
                    <div className="counter-cantidad">{cantidad}</div>
                    <button className="counter-btn" onClick={sumarCantidad}>+</button>
                </div> 
            : <button className="btn checkout">Terminar Compra</button>} */}
            
        </>
    )
}