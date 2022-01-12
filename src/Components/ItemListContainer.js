import React,{useEffect} from 'react';
import { NavLink,Link } from 'react-router-dom';
import ItemList from './ItemList';
import { useParams } from "react-router-dom"

const ItemListContainer = ( props ) => {

    const {saludo,productos,setProductos} = props;
    const {id} = useParams();
    console.log(id);

    const productosListos = [
        {
            "id":1,
            "title":"PC Gamer Basic",
            "description":"Pc Gamer basica para comenzar a jugar",
            "price":"95.000",
            "pictureUrl":"https://http2.mlstatic.com/D_NQ_NP_946386-MLA44217276177_122020-O.jpg",
            "categoria": 1
        },
        {
            "id":2,
            "title":"PC Gamer Starter",
            "description":"Pc Gamer intermedia para personas que buscan mas recursos",
            "price":"137.999",
            "pictureUrl":"https://http2.mlstatic.com/D_NQ_NP_815492-MLA43844848207_102020-O.jpg",
            "categoria": 1
        },
        {
            "id":3,
            "title":"PC Gamer Full",
            "description":"Pc Gamer Full para amantes del gaming y de los FPS",
            "price":"250.450",
            "pictureUrl":"https://s3-sa-east-1.amazonaws.com/saasargentina/0C0ZWROuq2nWag7npST7/imagen",
            "categoria": 2
        }
    ];
    
    
  useEffect(() => {

        const GetProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productosListos)
        }, 2000);
        });

        GetProducts
        .then(productos =>{
            if(id === undefined){
                setProductos(productos);
            }
            else{
                const productoSeleccionado = productos.filter(producto => producto.categoria == id);
                setProductos(productoSeleccionado);
            }
        })
        .catch(()=>{
            setProductos([]);
            console.log("Error al obtener productos");
        })
    },id);

    return(
        <>
        <div className="jumbotron jumbotron-fluid mt-5">
            <div className="container">
                <h1 className="display-4">{saludo}</h1>
            </div>
        </div>
        <ItemList productos={productos}/>
        <NavLink to="cart">
            <button type="button" class="btn btn-primary btn-lg">Terminar Compra</button>
        </NavLink>
        </>
    )
}
export default ItemListContainer;