/* import { useState } from 'react' */
import './App.css'
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Mates from './components/Mates/Mates';
function App() {
/*   const [count, setCount] = useState(0) */

  return (
    <>
      <NavBar />
      <Header title="Soy el titulo a partir de una propiedad" />
      <Mates />

    </>
  )
}

export default App
