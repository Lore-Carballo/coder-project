import './styles.sass';
import { useContext, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context';

export function Cart() {
  const cartContext = useContext(CartContext); //Context (Estado Global y métodos globales) del Carrito
  const [cartQty, setCartQty] = useState(0)

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');

  useEffect(() => {
    setCartQty(cartContext.getTotalQty())
  }, [cartContext.cart])

  if (cartQty > 0) {
    return (
      <>   
        <div className="cart-container">
          <div className="cart-content">

            <div className="cart__header">
              <div className="col-product">Producto</div>
              <div className="col-cantidad">Cantidad</div>
              <div className="col-precio">Precio</div>
              <div className="col-acciones"><button onClick={cartContext.clear}>Vaciar carrito</button></div>
            </div>
      
            <div className="cart__list">
              {
                cartContext.cart.map(
                  ({ item, quantity }) => {
                  return (
                    <div className="cart__item" key={item.id}>
                      <div className="cart__item__producto">
                        <div className="cart__item__img">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="cart__item__info">
                          <h2>
                            {item.title}
                          </h2>
                          <p>Precio: ${item.price}</p>
                        </div>
                      </div>
      
                      <div className="cart__item__cantidad">
                        <p>
                          {quantity}
                        </p>
                      </div>
      
                      <div className="cart__item__precio">
                        <p>
                          ${item.price * quantity}
                        </p>
                      </div>
      
                      <div className="cart__item__accion">
                        <button onClick={() => cartContext.removeItem(item.id)}>X</button>
                      </div>
                    </div>
                  )
                }
              )
            }
            </div>
            
            <div className="cart__footer">
              <button className="btn secondary">
                  <Link to={'/'}>Seguir Comprando</Link>
              </button>

              <div className="cart-total">Total: {cartContext.getSubTotalPrice()}</div>
            </div>
          </div>
        
          <div className="checkout-container">
            <h4>Datos del comprador</h4>
            <p>Completá tus datos para finalizar la compra</p>
            <div className="form">
              <input type="email" placeholder="Email" onInput={(e) => {setEmail(e.target.value)}} />
              <input type="tel" placeholder="Phone" onInput={(e) => {setPhone(e.target.value)}} />
              <input type="text" placeholder="Name" onInput={(e) => {setName(e.target.value)}} />
            </div>

            <button className="btn" onClick={() => { cartContext.createOrder(name, phone, email) }}>Finalizar compra</button>

          </div>
        </div>

        
      </>
    )
  }
  else {
    return (
    
      <div className="cart-container">
        <div className="empty-cart">
          <p>El carrito está vacío</p>
          <button className="btn add-cart">
              <Link to={'/'}>Volver a la tienda</Link>
          </button>
        </div>
      </div>
         
    )
  }

  
}
