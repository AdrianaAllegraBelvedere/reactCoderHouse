import React,{useState} from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({saludo}) => {

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
            }

        }
    }
      

    return(
        <>
        <div className="jumbotron jumbotron-fluid mt-5">
            <div className="container">
                <h1 className="display-4">{saludo}</h1>
            </div>
        </div>
        <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>

        </>
    )
}
export default ItemListContainer;