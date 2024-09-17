import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader.jsx';

const Header = lazy(() => import('./components/Header/Header'));
const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog.jsx'));
const Camper = lazy(() => import('./pages/Camper/Camper.jsx'));
const Features = lazy(() => import('./pages/Features/Features.jsx'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews.jsx'));
const NotFound = lazy(() => import('./components/NotFound/NotFound.jsx'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/campers" element={<Catalog />} />
          <Route path="/campers/:id" element={<Camper />}>
            <Route index element={<Features />} />
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
