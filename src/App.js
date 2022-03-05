import './App.css';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import ItemListContainer from './components/Item/ItemListContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FreeGames from './pages/FreeGames';
import Sale from './pages/Sale';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';

export default function App() {
  /* variable useState que va a guardar datos del carrito */
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter className=''>
      <CartContextProvider>
        <div className='h-screen justify-between flex flex-col bg-slate-200'>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/freegames' element={<FreeGames />} />
            <Route path='/sale' element={<Sale />} />
            <Route
              path='/detail/:productId'
              element={<ItemDetailContainer />}
            />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}
