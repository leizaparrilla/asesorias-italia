import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import CartContextProvider from './components/Context/CartContext';



function App() {

  
  return (
    <>
     <CartContextProvider>
      <BrowserRouter>
          
          <NavBar/>
          
          <Routes>
            <Route exact path={"/"} element={<ItemListContainer />} />
            <Route exact path={"/category/:categoryId"} element={<ItemListContainer />} />
            <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route exact path={"/cart"} element={<Cart />} />
            <Route exact path={"/checkout"} element={<Checkout />} />
            <Route exact path={"*"} element={<NotFound />} />
          </Routes> 
      </BrowserRouter>
      </CartContextProvider>
    </>
  
  )
}
export default App