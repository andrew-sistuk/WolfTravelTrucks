import { Route, Routes } from 'react-router-dom';
import Category from './components/Category/Category.jsx';
import Cup from '../src/assets/icons/cup.svg?react';
import NotFound from './components/NotFound/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Category Icon={Cup} text="Engine" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
