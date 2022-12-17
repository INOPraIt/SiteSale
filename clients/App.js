import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Bascet from './pages/Basket/Bascet';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';

const App = () => {
  return (
    <div>
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bascet" element={<Bascet />} />
      </Routes>
    </Layout>
    </div>
  )
}

export default App;
