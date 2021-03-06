import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AuthProvider} from './store/AuthContext';
import {CustomerProvider} from './store/CustomerContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CustomerProvider>
        <App />
      </CustomerProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
