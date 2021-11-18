import React, { useState, useEffect, setGlobal } from 'reactn';
import { Switch, Route } from "react-router-dom";
import Layout from './Layout';
import Home from "./pages/Home";
import SignIn from './pages/SignIn';
import Transactions from './pages/Transactions';
import Account from './pages/Account';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [happy, setHappiness] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  setGlobal({
    signedIn: true
  });
    
  return (
    <Layout>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home happy={happy} />
            )}
          />
          <ProtectedRoute
            exact
            path="/Transactions"
            component={() => (
              <Transactions happy={happy} />
            )}
          />
          <ProtectedRoute
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
