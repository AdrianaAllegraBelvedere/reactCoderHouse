import React,{useEffect,useState} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';


const ItemListContainer = ({saludo}) => {


    const [productos,setProductos] = useState([]);
    const productosListos = [
        {
            "id":1,
            "title":"PC Gamer Basic",
            "description":"Pc Gamer basica para comenzar a jugar",
            "price":"95.000",
            "pictureUrl":"https://http2.mlstatic.com/D_NQ_NP_946386-MLA44217276177_122020-O.jpg"
        },
        {
            "id":2,
            "title":"PC Gamer Starter",
            "description":"Pc Gamer intermedia para personas que buscan mas recursos",
            "price":"137.999",
            "pictureUrl":"https://http2.mlstatic.com/D_NQ_NP_815492-MLA43844848207_102020-O.jpg"
        },
        {
            "id":3,
            "title":"PC Gamer Full",
            "description":"Pc Gamer Full para amantes del gaming y de los FPS",
            "price":"250.450",
            "pictureUrl":"https://s3-sa-east-1.amazonaws.com/saasargentina/0C0ZWROuq2nWag7npST7/imagen"
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
            setProductos(productos);
        })
        .catch(()=>{
            setProductos([]);
            console.log("Error al obtener productos");
        })
    },[]);



    const stock = 5;
    const initial = 0;
    const onAdd = (productosEnCarrito) =>{
        if(stock > 0)
        {
            if(productosEnCarrito == 0){
                console.log(`Tu carrito esta vacio`)
            }
            else{
                console.log(`Tienes ${productosEnCarrito} productos en el carrito`)
            }

        }
    }
      

    return(
        <>
        <div className="jumbotron jumbotron-fluid mt-5">
            <div className="container">
                <h1 className="display-4">{saludo}</h1>
            </div>
        </div>
        <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
        <ItemList productos={productos}/>
        </>
    )
}
export default ItemListContainer;