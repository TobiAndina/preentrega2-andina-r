
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/shared/Sidebar';
import { Inicio } from "./pages/inicio";
import { Shortboards } from './pages/shortboards';
import { Longboards } from './pages/longboards';
import { Hybrid} from './pages/hybrid';
import { Accesorios } from './pages/accesorios';
import { Nosotros } from './pages/nosotros';
import { Contacto } from './pages/contacto';




function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path="/shortboards" element={<Shortboards />} />
          <Route path="/longboards" element={<Longboards />} />
          <Route path="/hybrid" element={<Hybrid />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
