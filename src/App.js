import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
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
    <BrowserRouter>
    <div className='bg-slate-200'>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/freegames" element={<FreeGames />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="/detail" element={<ItemDetailContainer />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}