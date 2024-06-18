import { useState } from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import NavBar from './navBar';

function Home({ setActiveProductInfo }) {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <>
      <NavBar title= ' Products '/>
      <CategoryList setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
      <ProductList activeCategory={activeCategory} setActiveProductInfo={setActiveProductInfo}/>
    </>
  )
};

export default Home;