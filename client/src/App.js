import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Layout from './Layout';
import Home from "./pages/Home";
import SignIn from './pages/SignIn';
import './App.css';

function App() {
  const history = useHistory();
  const [happy, setHappiness] = useState(null);
  useEffect(() => {
    setHappiness(false);
    console.log(happy)
  })
  
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
          <Route
            exact
            path="/SignIn"
            component={() => (
              <SignIn happy={happy} />
            )}
          />
        </Switch>
    </Layout>
  );
}

export default App;
