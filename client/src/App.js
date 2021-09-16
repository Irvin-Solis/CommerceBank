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
  const redirect = (link)=>{
    history.push(link)
  }
  return (
    <Layout>
      <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home happy={happy} redirect={redirect} />
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
      </BrowserRouter>
    </Layout>
  );
}

export default App;
