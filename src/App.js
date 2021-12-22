import React from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';

function App() {
  const saludo = 'Hola Mundo!';

  return (
    <>
    <NavBar/>
    <ItemListContainer saludo={saludo}/>
    <hr/>
    <ItemDetailContainer/>
    </>
  );
}

export default App;
