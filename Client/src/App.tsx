// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import IngredientsListPage from './pages/IngredientsListPage';
import AddIngredientsPage from './pages/AddIngredientsPage';

function App() {
  return (
    <Routes>
      {/* All routes inside here will use the MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<IngredientsListPage />} />
        <Route path="add-ingredient" element={<AddIngredientsPage />} />
      </Route>
    </Routes>
  );
}

export default App;