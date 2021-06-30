import './styles.sass';
import { ItemCount } from "../ItemCount/index";

export const ItemDetail = (props) => {
    return (
        <div className="item-detail-container">
            <div className="product-img">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="product-info">
                <h3 className="product-title">{props.title}</h3>
                <div className="product-description">
                    <p>{props.description}</p>
                </div>
                
                <div className="product-price">
                    $<span className="price">{props.price}</span>
                </div>
                
                
                <ItemCount stockProducto = {props.stock}/> 

                <button class="btn add-cart">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}