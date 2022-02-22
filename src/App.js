import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import FreeGames from './pages/FreeGames';
import Sale from './pages/Sale';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

export default function App() {
  return (
    <BrowserRouter className=''>
    <div className='bg-slate-200 h-screen justify-between flex flex-col'>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/freegames" element={<FreeGames />} />
      <Route path="/sale" element={<Sale />} />
      <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}