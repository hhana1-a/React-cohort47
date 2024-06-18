import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Home from './Home';
import { useState } from 'react';
import { FavProvider } from './favContext';
import FavPage from './favoritesPage.jsx';

function App() {
  const [activeProductInfo, setActiveProductInfo] = useState({});

  return (
    <div className='App'>

      <FavProvider>
       <Router>
        <Routes>
          <Route path='/' element={<Home setActiveProductInfo={setActiveProductInfo}/>}/>
          <Route path={'product/:id'} element={<ProductDetails activeProductInfo={activeProductInfo}/>}/>
          <Route path='/fav' element={<FavPage setActiveProductInfo={setActiveProductInfo}/>}/>
        </Routes>
      </Router> 
      </FavProvider>
    </div>
  )
}

export default App;