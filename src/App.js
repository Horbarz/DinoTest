import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Cities from './components/Cities';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SingleCity from './components/SingleCity';
import Locations from './components/Locations';

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route path="/" exact component={Cities}/>
          <Route path="/location" exact component={Locations} />
          <Route path="/city" exact component={SingleCity}/>
        </Provider>
      </Switch>
    </Router>
   
  );
}

export default App;
