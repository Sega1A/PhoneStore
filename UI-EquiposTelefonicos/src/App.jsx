import { Routes, Route, Link } from 'react-router-dom';
import RegistroCelulares from './RegistroCelulares';
import Galeria from './Galeria';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Galería</Link> |{' '}
        <Link to="/registro">Registro</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Galeria />} />
        <Route path="/registro" element={<RegistroCelulares />} />
      </Routes>
    </div>
  );
}

export default App;
