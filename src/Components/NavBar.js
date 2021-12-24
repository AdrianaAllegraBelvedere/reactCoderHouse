import React from  'react';
import CartWidget from './CartWidget';
import { BsFillCartFill} from "react-icons/bs";
import { NavLink,Link } from 'react-router-dom';

const NavBar = ({links,cantidadProductos}) => {

    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            < CartWidget />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    {links.map(link =>{
                        return (
                            <li className="nav-item">
                                <Link key={link.id} className="nav-link" to={link.href}>{link.nombre}</Link>
                            </li>
                        )
                    })}
                    <NavLink to="carrito">
                        <li className="nav-item">
                            <div>
                                <p className="nav-link" href="#">
                                    <BsFillCartFill/>
                                    <label>
                                        |{cantidadProductos === 0 ? " " : cantidadProductos}
                                    </label>
                                </p>
                            </div>
                        </li>
                    </NavLink>
                </ul>
            </div>
            </nav>
    );
}

export default NavBar;