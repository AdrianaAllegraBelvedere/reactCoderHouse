import React,{useState} from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import VistaError from './Components/VistaError';
import Carrito from './Components/Carrito';


const App = () => {

  const saludo = 'Hola Mundo!';
  const [productos,setProductos] = useState([]);
  const [cantidadProductos,setCantidadProductos] = useState(0);
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
        <NavBar links={links} cantidadProductos = {cantidadProductos}/>
        <Routes>
              <Route path="/" element={<ItemListContainer  setCantidadProductos ={setCantidadProductos} saludo ={saludo} productos={productos} setProductos={setProductos}/>}/>
              <Route path="/categoria/:id" element={<ItemListContainer setCantidadProductos ={setCantidadProductos} saludo ={saludo} productos={productos} setProductos={setProductos}/>}/>
              <Route path="/item/:id" element={ <ItemDetailContainer productos={productos} /> } />
              <Route path="*" element={<VistaError/>}/>
              <Route path="carrito" element={<Carrito/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
