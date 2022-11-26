import React from "react";

function QuienesSomos(props) {
    return (
        <div className='contenedor-QuienesSomos'>
            <h1>E-commerce</h1>
            <br></br>
            <br></br>
            <h4> Es la forma más fácil de comprar productos del mundo y recibir en tu puerta.
                con más de 1.000 millones de productos nuevos y originales de las mejores marcas de Estados Unidos y del mundo entero. En E-commerce.com vives una experiencia de compra única desde la comodidad de tu casa, con una sola cuenta, todo en un solo lugar. Encuentra las últimas tendencias y productos novedosos, cómpralos on-line y te los enviamos por un servicio postal (del tipo Courier) para que lo recibas en tus manos, con todos los costos incluidos. Ver políticas de envío.
                En E-commerce.com, el precio que ves al finalizar tu compra, incluye todos los costos de envío e impuestos hasta tu hogar u oficina, por lo cuál el producto te llega sin costos adicionales hasta tu manos. ¡Sin sorpresas!</h4>
            <br></br>
            <br></br>

            <ul>
                <li><h4>Beneficios de comprar en E-commerce</h4></li>
                <li><h4>Mayor variedad de productos en una misma tienda.</h4></li>
                <li><h4>Mejor precio que comprar en tu país.</h4></li>
                <li><h4>Productos 100% originales de las mejores marcas.</h4></li>
                <li><h4>Más opciones para abonar tu orden.</h4></li>
                <li><h4>Precio de tu orden con todos los costos incluidos.</h4></li>
                <li><h4>Costo por kilo por envío a país de destino.</h4></li>
            </ul>


            <img
                src={require('../../images/perfil1.jpeg')}
                alt="#h" />
            <div className='contenedor-texto-QuienesSomos'>
                <h2 className='nombre-QuienesSomos'>Alexis</h2>
                <p className='cargo-QuienesSomos'></p>
                <p className='texto-QuienesSomos'></p>
            </div>
            <img
                className='imagen-QuienesSomos'
                src={require('../../images/perfil2.png')}
                alt="#h" />
            <div className='contenedor-texto-QuienesSomos'>
            <h2 className='nombre-QuienesSomos'>Pablo</h2>                <p className='cargo-QuienesSomos'></p>
                <p className='texto-QuienesSomos'></p>
            </div>
            <img
                className='imagen-QuienesSomos'
                src={require('../../images/perfil3.jpg')}
                alt="#h" />
            <div className='contenedor-texto-QuienesSomos'>
            <h2 className='nombre-QuienesSomos'>Lautaro</h2>                <p className='cargo-QuienesSomos'></p>
                <p className='texto-QuienesSomos'></p>
            </div>
        </div>
    );
}

export default QuienesSomos;



