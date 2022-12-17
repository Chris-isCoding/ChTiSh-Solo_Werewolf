import React from 'react';
import { render } from 'react-dom';
//import ReactDOM from "react-dom/client";
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

/**
 * A web based free werewolf game
 */

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';





const root = createRoot(document.getElementById('root'))
root.render(
    // wrap the App in the Provider Component and pass in the store
    <Provider store={store}>
      <App />
    </Provider>
);


// render(
//   // wrap the App in the Provider Component and pass in the store
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

