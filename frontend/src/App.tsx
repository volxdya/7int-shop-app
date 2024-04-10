import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Register } from './components/Register/Register';
const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper" />
      <div className="content">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/profile" element={<Profile />} />
  
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
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