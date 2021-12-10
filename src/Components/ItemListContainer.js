import React from 'react';

const ItemListContainer = ({saludo}) => {

    return(
        <>
        <div class="jumbotron jumbotron-fluid mt-5">
            <div class="container">
                <h1 class="display-4">{saludo}</h1>
            </div>
        </div>
        </>
    )
}
export default ItemListContainer;