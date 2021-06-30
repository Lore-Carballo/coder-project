import './App.css';
import './assets/sass/styles.sass';
import { Home } from "./assets/views/Home/index";
import { NavBar } from "./assets/components/NavBar/index";
import { ItemDetailContainer } from "./assets/views/ItemDetailContainer/index";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={ItemDetailContainer} />
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path='*' component={404} /> */}

          {/* <Route exact path="/item-detail" component={ItemDetailContainer} /> */}
        </Switch>        
      </div>
    </BrowserRouter>
  );
}

export default App;
