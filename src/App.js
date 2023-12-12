import logo from './logo.svg';
import './App.css';
import MiComponente from './componentes/MiComponente';
import { SegundoComponente } from './componentes/SegundoComponente';
import { TercerComponente } from './componentes/TercerComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react!!
        </p>

        {/* Cargar mi primer componente */}
        <div className="componentes">

          <hr />
          <TercerComponente nombre="Victor" apellidos="Robles" />
          <hr />
          <SegundoComponente />
          <hr />
          <MiComponente />

        </div>
      </header>
    </div>
  );
}

export default App;
