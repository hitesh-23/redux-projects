import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//import redux

import { Provider } from "react-redux";
import store from "./redux/store";



ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App store={store}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

