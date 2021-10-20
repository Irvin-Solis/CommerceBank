import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Layout from './Layout';
import Home from "./pages/Home";
import SignIn from './pages/SignIn';
import Transactions from './pages/Transactions';
import Account from './pages/Account';
import './App.css';

function App() {
  const [happy, setHappiness] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [signIn, setSignIn] = useState(false);
  
  return (
    <Layout signIn={signIn}>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home happy={happy} />
            )}
          />
          <Route
            exact
            path="/Transaction"
            component={() => (
              <Transactions happy={happy} />
            )}
          />
          <Route
            exact
            path="/Account"
            component={() => (
              <Account happy={happy} userInfo={userInfo} />
            )}
          />
        </Switch>
    </Layout>
  );
}

export default App;
