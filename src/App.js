import React from "react";
import { Header } from "./componentes/Header";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./componentes/Carrito";
import { Navbar } from "./componentes/Header/Navbar";
import { Footer } from "./componentes/Footer/footer";
import { Carrusel } from "./componentes/Carrusel/Carrusel";

function App() {
  
  return (
    
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrusel/>
{/*       <Carrito />
      <Paginas /> */}
      </Router>
      <Footer/>    
      
    </div>
    </DataProvider>
  );
}

export default App;