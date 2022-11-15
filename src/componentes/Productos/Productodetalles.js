import React, {useContext, useState, useEffect} from "react"
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";

export const Productodetalles = () => {
    const value = useContext(DataContext)
    const[productos] = value.productos;
    const [detale, setDetalle] = useState([])
    const params = useParams();

useEffect(() =>{
productos.forEach(producto => {
    console.log(productos.id, params.id)
    if(producto.id === params.id){
        setDetalle(producto)
    }
})
})
    return (
        <div>
            <h1>
                Detalles del producto
            </h1>
        </div>
    )

}