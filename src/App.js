import logo from './logo.svg';
import './App.css';
import MiComponente from './componentes/MiComponente';
import { SegundoComponente } from './componentes/SegundoComponente';
import { TercerComponente } from './componentes/TercerComponente';
import { EventosComponente } from './componentes/EventosComponente';

function App() {

  const ficha_medica = {
    altura: "187cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna",
  }

  // const numero = 123456;

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
          <EventosComponente />

          <hr />
          <TercerComponente
            // nombre="Victor"
            // nombre={numero}
            // apellidos="Robles"
            ficha={ficha_medica}
          />

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
