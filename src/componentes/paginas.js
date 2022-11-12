import React from "react";
import { Switch, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductoLista } from "./Productos/index.js";
export const Paginas = () => {
    return (
        <section>
            <switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/productos" exact component={ProductoLista} />
            </switch>
        </section>
    )
}