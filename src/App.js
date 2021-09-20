import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Cities from './components/Cities';
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <Provider store={store}>
      <Cities />
    </Provider>
  );
}

export default App;
