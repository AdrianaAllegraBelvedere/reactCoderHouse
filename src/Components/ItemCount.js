import React,{useState} from 'react';

const ItemCount = ({stock,initial,onAdd})=>{

    const [contador,setContador] = useState(initial);
      
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
    return (
        <>
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

        </>
    )
}
export default ItemCount;