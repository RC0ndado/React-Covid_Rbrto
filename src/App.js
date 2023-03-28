import './App.css';
//import Fecha from './components/Fecha';
import Imagen from './components/Imagen';
import Registro from './components/Registro';
import Titulo from './components/Titulo';

function App() {
  return (
      <div className="App">
        <Titulo texto="COVID-19"/>
        <Registro 
          registro={{
            fecha: new Date(2023, 5, 15), 
            titulo: "Contagios", 
            contagios: 1857,
            }} 
          />
          <Imagen />
      </div>
  );
}

export default App;
