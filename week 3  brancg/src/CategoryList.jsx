import Category from './Category';
import useFetch from './useFetchCustomHook';

export default function CategoryList({ setActiveCategory, activeCategory }) {
  const { data } = useFetch(`https://fakestoreapi.com/products/categories`);

  const listItems = data?.map(category =>
    <Category 
    setActiveCategory={setActiveCategory} 
    category={category} 
    activeCategory={activeCategory} 
    key={category} /> 
  );
  
  return <ul className='category-list'>{listItems}</ul>;
}