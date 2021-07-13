import './styles.sass';
import { ItemCount } from "../ItemCount/index";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="product-info">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-excerpt">{item.excerpt}</p>
                <div className="product-price">
                    US$<span className="price">{item.price}</span>
                </div>
                
                {/* <ItemCount stockProducto = {item.stock}/>  */}

                <button className="btn add-cart">
                    {/* <Link to={'/item-detail'}>Ver Detalle</Link> */}
                    <Link to={`/item/${item.id}`}>Ver Detalle</Link>
                </button>
            </div>
        </div>
    )
}