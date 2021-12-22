import React,{useEffect,useState} from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [producto,setProducto] = useState({});
    const productosSeleccionado = {
        "description": "Oferta Teclado Gamer, porducto destacado",
        "price": "$19.500",
        "productImg":"https://m.media-amazon.com/images/I/61A5JnttvYL._AC_SY450_.jpg",
    };
   
  useEffect(() => {

        const GetItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productosSeleccionado)
        }, 2000);
        });

        GetItem
        .then(productos =>{
            setProducto(productos);
        })
        .catch(()=>{
            console.log("Error al obtener productos");
        })
    },[]);

    return(
        <>
            <ItemDetail producto={producto}/>
        </>
    )
}
export default ItemDetailContainer;