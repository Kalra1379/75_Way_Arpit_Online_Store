import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Products from './pages/Product';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/products' element={<Products/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
