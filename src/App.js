import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

export default function App() {
  return (
    <div className='bg-slate-200'>
      <NavBar />
      <ItemListContainer />
    </div>
  )
}