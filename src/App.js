import './App.css';
import Navbar from './components/navbar/Navbar';
import Tolov from './router/tolov/Tolov';
import Trek from './router/trek/Trek'
import Til from './router/til/Til'
import Savatcha from './router/savatcha/Savatcha'
import Sevimlilar from './router/sevimlilar/Sevimlilar'
import Kabinet from './router/kabinet/Kabinet'
import Home from './router/home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/tolov' element={<Tolov/>}></Route>
      <Route path='/trek' element={<Trek/>}></Route>
      <Route path='/til' element={<Til/>}></Route>
      <Route path='/savatcha' element={<Savatcha/>}></Route>
      <Route path='/sevimlilar' element={<Sevimlilar/>}></Route>
      <Route path='/kabinet' element={<Kabinet/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
