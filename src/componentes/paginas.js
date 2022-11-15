import React from 'react';
import { Switch , Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductoLista } from "./Productos/index";
import {  Productodetalles } from "./Productos/Productodetalles";

export const Paginas = () => {
    return (
        <section>
            <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/productos" exact component={ProductoLista} />
            <Route path="/producto/:id" exact component={ProductoLista} />
            </Switch>
        </section>   
 )
}
