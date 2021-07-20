import './styles.sass';
import { ItemCount } from "../ItemCount/index";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context';


export const ItemDetail = ({ item }) => {
  
  const initial = 1;
  const cartContext = useContext(CartContext); //Context (Estado Global y métodos globales) del Carrito
  const stockInCart = cartContext.getItemQty(item.id); // Cantidad agregada del item en el carrito
  const [itemsQ, setItemsQ] = useState(initial); // items seleccionados antes de enviar al carrito
  const [maxStock, setMaxStock] = useState(item.stock - stockInCart ); //stock máximo y se le restan la cantidad ya agregada al carrito
  const availableStock = maxStock - itemsQ ; // stock disponible, stock máximo menos la cantidad actual seleccionada

  const onAdd = () => {
    if (itemsQ >= maxStock) {
      return;
    } else {
      setItemsQ(itemsQ + 1);
    }
  };

  const onSubtract = () => {
    if (itemsQ <= initial) {
      return;
    } else {
      setItemsQ(itemsQ - 1);
    }
  };

  const [viewCart, setviewCart] = useState(false);
  const handleClick = () => setviewCart('show');

  const onAddToCart = () => {
    cartContext.addItem(item, itemsQ);
    setMaxStock(maxStock - itemsQ);
    setItemsQ(0);

    handleClick();
  };

  

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
        <div className="stock">
          Stock: {availableStock}
        </div>
        <ItemCount min={initial} max={maxStock} value={itemsQ} onAdd={onAdd} onSubstract={onSubtract} />
        <button className="btn add-cart" onClick={onAddToCart}>
          Agregar al Carrito
        </button>
        <div className={viewCart ? "show" : "hide"}>
          <button className="view-cart">
            <Link to={'/cart'}>Ver Carrito</Link>
          </button>
        </div>
        
      </div>
    </div>
  )
}