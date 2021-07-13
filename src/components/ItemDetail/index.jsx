import './styles.sass';
import { ItemCount } from "../ItemCount/index";

export const ItemDetail = ({item}) => {
    return (
        <div className="item-detail-container">
            <div className="product-img">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="product-info">
                <h3 className="product-title">{item.title}</h3>
                <div className="product-description">
                    <p>{item.description}</p>
                </div>
                
                <div className="product-price">
                    $<span className="price">{item.price}</span>
                </div>

                <ItemCount stockProducto={item.stock} item={item}/>
                
            </div>
        </div>
    )
}