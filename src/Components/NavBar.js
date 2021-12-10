import React from  'react';
import CartWidget from './CartWidget';
import { BsFillCartFill} from "react-icons/bs";

const NavBar = () => {

    return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
            < CartWidget />

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Productos Destacados</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Carrito</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">login</a>
                    </li>
                    <li class="nav-item">
                        <div>
                            <p class="nav-link" href="#">
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