import './App.css';
import './sass/styles.sass';
import { useState } from "react";
import { NavBar } from "./components/NavBar/index";
import { ItemListContainer } from "./views/ItemListContainer/index";
import { ItemDetailContainer } from "./views/ItemDetailContainer/index";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { shopContext } from './context/index';

function App() {
  const [listProducts, setListProducts] = useState([{id:1, name:'libro', price:150}])
  return (
    // <>
    // {
    //   !!Object.keys(product).length
          // ? 
          <shopContext.Provider value={{listProducts, setListProducts}}>
              <div className="App">
                <BrowserRouter>
                  <NavBar />
                  <Switch>
                    <Route exact path="/" >
                      <ItemListContainer name="Fabio" />
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
              </div>
            </shopContext.Provider>
          // : <img className="loading-gif" src="/img/loading-animation.gif" alt="Cargando" />
    // }
    // </>
  );
}

export default App;
