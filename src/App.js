import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className='bg-slate-200'>
      <NavBar />
      <ItemListContainer />
      <Footer/>
    </div>
  )
}