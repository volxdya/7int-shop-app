import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Suspense, lazy } from 'react';
const App = () => {

  const LazyProfile = lazy(() => import('./components/Profile/Profile'));
  const LazyMyShop = lazy(() => import('./components/Profile/MyShop/MyShop'));
  const LazyMainPage = lazy(() => import('./components/MainPage/MainPage.tsx'));
  const LazyProductPage = lazy(() => import('./components/ProductPage/ProductPage.tsx'));

  return (
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        <div className="wrapper" />
        <div className="content">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/profile" element={<LazyProfile />} />
              <Route path="/my-shop/:id" element={<LazyMyShop />} />
              <Route path="/product/:id" element={<LazyProductPage />} />
              <Route path="/" element={<LazyMainPage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
export default App;

