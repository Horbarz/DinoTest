import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Cities from './components/Cities';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
       <Provider store={store}>
        <Cities />
      </Provider>
    </Router>
   
  );
}

export default App;
