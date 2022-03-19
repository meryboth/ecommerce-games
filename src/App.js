import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FreeGames from './pages/FreeGames';
import Sale from './pages/Sale';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import { CartContext } from './context/CartContext';
import { NotificationServicesProvider } from './services/notification/notificationServices';

export default function App() {
  return (
    <BrowserRouter className=''>
      <NotificationServicesProvider>
        <CartContextProvider>
          <div className='h-screen justify-between flex flex-col bg-slate-200'>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/freegames' element={<FreeGames />} />
              <Route path='/sale' element={<Sale />} />
              <Route
                path='/category/:categoryId'
                element={<ItemListContainer />}
              />
              <Route
                path='/detail/:productId'
                element={<ItemDetailContainer />}
              />
              <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
          </div>
        </CartContextProvider>
      </NotificationServicesProvider>
    </BrowserRouter>
  );
}
