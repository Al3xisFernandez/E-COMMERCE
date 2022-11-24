import React from 'react'
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";
import Navbar from './components/Navbar/Navbar';
import Login from 'components/Login/Login';
import Footer from 'components/Footer/Footer';
import Contactenos from 'components/Pagina de Contacto/Contactenos';
function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Login />
      <Navbar />
      <Header />
      <Carrito />
      <Pages />
      <Footer />
      <Contactenos />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
