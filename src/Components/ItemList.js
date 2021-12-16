import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {
    return(
        <>
            <div class="row">
                {productos.map(producto =>{
                    return(
                        <Item producto={producto} key={producto.id}/>
                    )
                })}
            </div>
        </>
    )
}
export default ItemList;