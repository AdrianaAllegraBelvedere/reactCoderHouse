import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

const Item = ( {producto,setCantidadProductos} ) => {

    const {id,description,price,title,pictureUrl} = producto;
    const stock = 5;
    const initial = 0;

    
    const onAdd = (productosEnCarrito) =>{
        if(stock > 0)
        {
            if(productosEnCarrito == 0){
                console.log(`Tu carrito esta vacio`)
            }
            else{
                console.log(`Tienes ${productosEnCarrito} productos en el carrito`)
                setCantidadProductos(productosEnCarrito);
            }
        }
    }

    return(
        <>
            <div className="card product" >   
                <div className="card-img">
                    <img className="card-img-top" src={pictureUrl}/>
                </div>
                <div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h6 className="card-subtitle mb-2 text-muted">$ {price}</h6>
                    <Link className="nav-link" to={`item/${id}`}>Mas detalles...</Link>
                    <Counter onAdd={onAdd} initial={initial} stock={stock}/>
                </div>
            </div>
        </>
    )
}
export default Item;