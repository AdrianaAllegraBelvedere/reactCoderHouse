import React from  'react';
import CartWidget from './CartWidget';
import { BsFillCartFill} from "react-icons/bs";

const NavBar = () => {

    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            < CartWidget />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos Destacados</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Carrito</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">login</a>
                    </li>
                    <li className="nav-item">
                        <div>
                            <p className="nav-link" href="#">
                                <BsFillCartFill/>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            </nav>
    );
}

export default NavBar;