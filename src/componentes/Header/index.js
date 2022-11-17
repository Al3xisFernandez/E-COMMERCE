
import React,{useContext} from 'react';
import Nike from "../../images/Nike.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";
import { Navbar } from './Navbar';

export const Header = () => {
    
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito

    const tooglemenu = () =>{
        setMenu(!menu)
    }
    return (
        <header>
            <Navbar />
{/*             <Link to="/">
                <div className="logo">
                    <img src={Nike} alt="logo" width="150" />
                </div>
            </Link>
            <div className="cart" onClick={tooglemenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div> */}
        </header>
    )
}
