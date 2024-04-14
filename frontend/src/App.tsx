import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Suspense, lazy } from 'react';
import { useUserData } from './store/useUserData';
import { currentId } from './api/user/currentId';
const App = () => {

  const LazyProfile = lazy(() => import('./components/Profile/Profile'));
  const LazyMyShop = lazy(() => import('./components/Profile/MyShop/MyShop'));

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
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
export default App

/* 
  <div className="container">
          <h1 className="mt-4">POPULAR PRODUCTS</h1>
          <div className="d-flex justify-content-center gap-5 flex-wrap mt-5">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
          <div className="d-flex justify-content-center gap-5 flex-wrap mt-5">
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
          </div>
        </div>
*/