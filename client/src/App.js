import React, { useState, useEffect, setGlobal } from 'reactn';
import { Switch, Route } from "react-router-dom";
import Layout from './Layout';
import Home from "./pages/Home";
import SignIn from './pages/SignIn';
import Transactions from './pages/Transactions';
import Account from './pages/Account';
import ProtectedRoute from './ProtectedRoute';
import '@fontsource/open-sans/400.css';
import '@fontsource/poppins/400.css';

const App = ({handleThemeChange, darkState}) => {
  const [happy, setHappiness] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  setGlobal({
    signedIn: true,
  });
    
  return (
    <Layout handleThemeChange={handleThemeChange} darkState={darkState} >
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
              <Account happy={happy} userInfo={userInfo} darkState={darkState} />
            )}
          />
        </Switch>
    </Layout>
  );
}

export default App;
