import React from 'react'
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";
import Login  from "./components/Login/Login";
import Navbar from './components/Navbar/Navbar';
import Butonburger from 'components/Navbar/Butonburger';
function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Login />
      <Navbar />
      <Butonburger />
      <Header />
      <Carrito />
      <Pages />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
