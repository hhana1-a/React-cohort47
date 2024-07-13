import { useState, useEffect } from 'react';
import NavBar from './navBar'
import Product from './Product';
import { FavProvider } from './favContext'
import useFetch from './useFetchCustomHook';

export default function FavoritesPage({ setActiveProductInfo }) {
  const [favProducts, setFavProducts] = useState([]);
  const { fav } = FavProvider;
  const { data, isLoading } = useFetch('www.fakestoreapi.com/products');

  useEffect(() => {
    if (data) {
      const favArray = data.filter(product =>
        fav.includes(product.id)
      );
      setFavProducts(favArray);
    }
  }, [data, fav]);

  return (
    <>
      <NavBar title='Favorites'/>
      {favProducts.length === 0 ? <p>You don't like anything from our shop. Ohhh. The bird is very sad. Quickly add something to make the bird happy again.</p> :
      <div className='product-card-list'>
        {isLoading ? <p>Loading...</p> : favProducts.map(product => (
          <Product
            key={product.id}
            product={product}
            setActiveProductInfo={setActiveProductInfo}
          />
        ))}
      </div>
      }
    </>
  );
}