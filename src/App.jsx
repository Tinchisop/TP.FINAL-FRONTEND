import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import MealDetail from './pages/MealDetail.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route element={<Layout />}>
        {/* La key cambia en cada navegación: al tocar "Inicio" estando en "/",
            Home se vuelve a crear desde cero (página 1 y buscador vacío) */}
        <Route path="/" element={<Home key={location.key} />} />
        <Route path="/receta/:id" element={<MealDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
