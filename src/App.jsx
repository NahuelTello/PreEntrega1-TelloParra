/* import { useState } from 'react' */
import './App.css'
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Mates from './components/Mates/Mates';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
/*   const [count, setCount] = useState(0) */

  return (
    <>
      <Header title="Soy el titulo de la página" />
      <NavBar />
      <ItemListContainer greeting="Matero" />
      <Mates />

    </>
  )
}

export default App
