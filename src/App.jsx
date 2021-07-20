import './App.css';
import './sass/styles.sass';
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./views/ItemListContainer";
import { ItemDetailContainer } from "./views/ItemDetailContainer";
import { Cart } from "./views/Cart";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CartProvider } from './context';

function App() {
  const [listProducts, setListProducts] = useState([{ id: 1, name: 'libro', price: 150 }])
  return (
    <div className="App">
      <CartProvider >
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" >
              <ItemListContainer name="Fabio" />
            </Route>
            <Route path="/cart" >
              <Cart />
            </Route>
            <Route path="/category/:id" >
              <ItemListContainer name="Fabio" />
            </Route>
            <Route path="/item/:id" >
              <ItemDetailContainer />
            </Route>
            <Route path="*" >
              <h1>404 Not Found</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
