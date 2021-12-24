import React from 'react';

const ItemDetail = ({producto}) => {

    const {description,price,pictureUrl,title} = producto;

    return(
        <>
            <div class="card">
                    <a href="#" class="thumbnail">
                    <img class="producto-destacado" src={pictureUrl}/>
                    </a>
                <div class="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h3 className="card-text">{description} <span class="label label-default">{price}</span></h3>
                </div>
            </div>
        </>
    )
}
export default ItemDetail;


