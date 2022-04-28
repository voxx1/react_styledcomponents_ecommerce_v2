import './App.css';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';
import Product from './pages/Product';
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index={true} element={<Home />} />
          <Route index={false} path=':productID' element={<Product />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="shop">
          <Route index={true} element={<ProductsList />} />
          <Route path="men">
            <Route index={true} element={<ProductsList type="men" />} />
            <Route index={false} path=":productID" element={<Product />} />
          </Route>
          <Route path="women">
            <Route index={true} element={<ProductsList type="women" />} />
            <Route index={false} path=":productID" element={<Product />} />
          </Route>
          <Route path="unisex">
            <Route index={true} element={<ProductsList type="unisex" />} />
            <Route index={false} path=":productID" element={<Product />} />
          </Route>
          <Route index={false} path=":productID" element={<Product />} />
        </Route>

        <Route path="*" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
