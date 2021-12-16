import React from 'react';

const Item = ( {producto} ) => {

    const {description,price,title,pictureUrl} = producto;
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
            </div>
        </div>
                
        </>
    )
}
export default Item;


/*
            <div class="card" style="width: 18rem;">
                <img className="card-img-top" src={pictureUrl} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
*/