import React from 'react';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';

function App() {
  const saludo = 'Hola Mundo!';


  return (
    <>
    <NavBar/>
    <ItemListContainer saludo={saludo}/>
    </>
  );
}

export default App;
