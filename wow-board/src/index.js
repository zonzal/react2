import React from 'react';
import ReactDOM from "react-dom/client";
import { Router } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./utils/store";
import history from "./utils/history";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider to="#" store={store}>
    <Router to="#" history={history}>
      <App />
    </Router>
  </Provider>
);