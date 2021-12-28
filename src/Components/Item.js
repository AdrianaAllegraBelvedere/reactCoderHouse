import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Item = ( {producto,setCantidadProductos} ) => {

    const {id,description,price,title,pictureUrl} = producto;
    const stock = 5;
    const initial = 0;

    const [contador,setContador] = useState(initial);
    
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

      
    const Sumar = () =>{
        let stockDisponible = stock > 0;
        if(stockDisponible)
        {
            let conStock = contador + 1 <= stock;
            if(conStock)
              setContador(contador + 1);
        }


      }
    
      const Restar = () =>{

        if(contador -1 >= 0)
            setContador(contador - 1);

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
                    <form>
                        <div className="form-group mt-2 mb-1">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary" onClick={() => Restar()}>-</button>
                                <button type="button" className="btn btn-secondary"><label className="text">{contador}</label></button>
                                <button type="button" className="btn btn-secondary" onClick={() => Sumar()}>+</button>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary mt-2 " onClick={() => onAdd(contador)}>Agregar</button>
                    </form>
                    <p className="mt-5">Tiene un stock de {stock} productos</p>
                </div>
            </div>
                
        </>
    )
}
export default Item;