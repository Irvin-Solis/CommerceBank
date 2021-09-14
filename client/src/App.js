import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
