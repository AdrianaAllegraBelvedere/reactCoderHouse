import React,{useState,useContext} from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import VistaError from './Components/VistaError';
import Carrito from './Components/Carrito';
import Compra from './Components/Compra';
import {CartContext} from './Context/CartContext';

const App = () => {

  const {context}  = useContext(CartContext);
  const saludo = 'Hola Mundo!';
  const [productos,setProductos] = useState([]);
  const links = [
    {"nombre":"inicio","href":"/","id":0},
    {"nombre":"productos","href":"/","id":1},
    {"nombre":"carrito","href":"carrito","id":2},
    {"nombre":"Categoria 1","href":"categoria/1","id":3},
    {"nombre":"Categoria 2","href":"categoria/2","id":4},
  ];

  return (
    <>
      <BrowserRouter>
        <NavBar links={links} cantidadProductos = {context.cantidadProductos}/>
        <Routes>
              <Route path="/" element={<ItemListContainer saludo ={saludo} productos={productos} setProductos={setProductos}/>}/>
              <Route path="/categoria/:id" element={<ItemListContainer context ={context} saludo ={saludo} productos={productos} setProductos={setProductos}/>}/>
              <Route path="/item/:id" element={ <ItemDetailContainer productos={productos} /> } />
              <Route path="*" element={<VistaError/>}/>
              <Route path="/carrito" element={<Carrito/>} />
              <Route path="/cart" element={<Compra/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;