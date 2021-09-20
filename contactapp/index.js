import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router}  from 'react-router-dom';
import composeWithDevTools from 'redux-devtools-extension';
import { Provider } from 'react-redux';

//Redux imports

import {createStore} from "redux";
import contactReducer from './redux/reducers/contactReducer';

const store = createStore(contactReducer, composeWithDevTools);

ReactDOM.render(
 
  <Provider store ={store}>
     <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
