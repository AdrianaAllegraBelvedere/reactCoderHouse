import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';
import {CartContext} from '../Context/CartContext';

const Item = ( {producto} ) => {

    const {addItem, removeItem}  = useContext(CartContext);
    const [isRemoveItem, setIsRemoveItem] = useState(false);
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
                addItem(producto,productosEnCarrito);
                setIsRemoveItem(true);
            }
        }
    }

    const quitarCarrito = (cantidadProductos) => {
        removeItem(producto,cantidadProductos);
        setIsRemoveItem(false);
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
                    <Counter onAdd={onAdd} initial={initial} stock={stock} isRemoveItem={isRemoveItem} quitarCarrito={quitarCarrito}/>

                </div>
            </div>
        </>
    )
}
export default Item;