import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {Footer} from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import {Suspense, lazy} from 'react';

const App = () => {

    const LazyProfile = lazy(() => import('./components/Profile/Profile'));
    const LazyMyShop = lazy(() => import('./components/Profile/MyShop/MyShop'));
    const LazyMainPage = lazy(() => import('./components/MainPage/MainPage.tsx'));
    const LazyProductPage = lazy(() => import('./components/ProductPage/ProductPage.tsx'));
    const LazyShopPage = lazy(() => import('./components/ShopPage/ShopPage.tsx'));
    const LazyError404 = lazy(() => import('./components/Error404/Error404.tsx'));
    const location = useLocation();

    return (
        <Suspense fallback={<div>Loading</div>}>
            <div className="wrapper"/>
            <div className="content">
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path="/profile" element={<LazyProfile/>}/>
                        <Route path="/my-shop/:id" element={<LazyMyShop/>}/>
                        <Route path="/shop/:id" element={<LazyShopPage/>}/>
                        <Route path="/product/:id" element={<LazyProductPage/>}/>
                        <Route path="/" element={<LazyMainPage/>}/>
                        <Route path="*" element={<Navigate to="/404"></Navigate>} />
                        <Route path="/404" element={<LazyError404/>}/>
                    </Routes>
                    {location.pathname !== "/404" && (
                        <Footer/>
                    )}
                </div>
            </div>
        </Suspense>
    )
}
export default App;

