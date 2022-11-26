import React from "react";

const Footer = () => {
    return (

        <div className="footer">
            <div className="container">
                <h4>E-commerce</h4>
                <ul className="List">
                    <box-icon type='logo' name='instagram'></box-icon>
                    <box-icon name='facebook-square' type='logo' ></box-icon>
                    <box-icon type='logo' name='twitter'></box-icon>
                    <box-icon name='youtube' type='logo' ></box-icon>
                    <box-icon name='twitch' type='logo' ></box-icon>
                </ul>
                <small>&copy; Copyright 2022.E-commerce | Todos los derechos reservados.</small>
            </div>
        </div>
    )
}
export default Footer