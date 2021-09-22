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
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Cities}/>
          <Route exact path="/location" component={Locations} />
          <Route exact path="/city" component={SingleCity}/>
        </Switch>
      </Provider>
      
    </Router>
   
  );
}

export default App;
