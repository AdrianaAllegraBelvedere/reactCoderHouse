import React from 'react';

const ItemDetail = ({producto}) => {

    const {description,price,productImg} = producto;

    return(
        <>
            <div class="row">
                <div class="col-xs-6 col-md-3">
                    <a href="#" class="thumbnail">
                    <img class="producto-destacado" src={productImg}/>
                    </a>
                </div>
                <div class="col-xs-6 col-md-3">
                    <h3>{description} <span class="label label-default">{price}</span></h3>
                </div>
            </div>
        </>
    )
}
export default ItemDetail;