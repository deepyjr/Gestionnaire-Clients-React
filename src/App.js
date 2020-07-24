import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Layout from './layout/Layout';
import Login from './views/Login';
import {AuthContext} from './store/AuthContext';



function App() {
  const {authState} = React.useContext(AuthContext)
  connexion = false
  const Check = (connexion) => {
    connexion = !connexion;
  }

  return (
    <div>
      {authState.token !==null ?
          <BrowserRouter>
            <Layout/>
          </BrowserRouter>
          :
          <Login/>
      }
    </div>
  );
}

export default App;
