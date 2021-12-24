import React from 'react';
import Item from './Item';

const ItemList = ({productos,setCantidadProductos}) => {
    return(
        <>
            <div class="row">
                {productos.map(producto =>{
                    return(
                        <Item producto={producto} key={producto.id} setCantidadProductos={setCantidadProductos}/>
                    )
                })}
            </div>
        </>
    )
}
export default ItemList;