import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import MealDetail from './pages/MealDetail.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/receta/:id" element={<MealDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
