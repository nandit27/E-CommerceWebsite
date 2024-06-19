import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Shop1} from './Pages/Shop1';
import {ShopCategory} from './Pages/ShopCategory';
import {Product} from './Pages/Product';
import {Cart} from './Pages/Cart';
import {LoginSignup} from './Pages/LoginSignup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop1/>}/>
        <Route path='/laptops' element={<ShopCategory category="laptop"/>}/>
        <Route path='/smartphones' element={<ShopCategory category="smartphone"/>}/>
        <Route path='/accessories' element={<ShopCategory category="accessories"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/> 
        </Route>
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
