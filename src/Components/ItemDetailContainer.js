import React,{useEffect,useState} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"

const ItemDetailContainer = ( props ) => {

    const { productos } = props;
    const {id} = useParams();

    const [producto,setProducto] = useState({});
    const productosSeleccionado = {
        "description": "Oferta Teclado Gamer, porducto destacado",
        "price": "$19.500",
        "productImg":"https://m.media-amazon.com/images/I/61A5JnttvYL._AC_SY450_.jpg",
    };

   
  useEffect(() => {

        const GetItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id)
        }, 2000);
        });

        GetItem
        .then(productoId =>{
            if(productoId === undefined){
                setProducto(productos);
            }
            else{
                const productoSeleccionado = productos.find(x => x.id == productoId);
                setProducto(productoSeleccionado);
            }
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