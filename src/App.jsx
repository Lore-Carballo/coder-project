import './App.css';
import './assets/sass/styles.sass';
import { useState } from "react";
import { Home } from "./assets/views/Home/index";
import { NavBar } from "./assets/components/NavBar/index";
import { ItemDetailContainer } from "./assets/views/ItemDetailContainer/index";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { shopContext } from './assets/components/Global/shopContext/index';

function App() {
  const [listProducts, setListProducts] = useState([{id:1, name:'libro', price:150}])
  return (
    <shopContext.Provider value={{listProducts, setListProducts}}>
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/item-detail" component={ItemDetailContainer} /> 
            <Route exact path='*' component={404} />

          </Switch>        
        </div>
      </BrowserRouter>
    </shopContext.Provider>
  );
}

export default App;
