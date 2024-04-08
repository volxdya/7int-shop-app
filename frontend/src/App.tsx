import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
function App() {

  return (
    <div>
      <div className="wrapper" />
      <div className="content">
        <Header />
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
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