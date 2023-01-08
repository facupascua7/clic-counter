import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import freecodecampLogo from './images/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freecodecampLogo}
          alt='logo de freecodecamp'
          />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClics= {numClics} />
        <Boton 
          texto = 'Clic'
          esBotonClic = {true}
          manejarClic = {manejarClic} />
        <Boton 
          texto = 'Reiniciar'
          esBotonClic = {false}
          manejarClic = {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
