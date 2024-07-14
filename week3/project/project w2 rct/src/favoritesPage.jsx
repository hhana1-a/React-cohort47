import { useState, useEffect } from 'react';
import NavBar from './navBar';
import Product from './Product';
import { FavProvider, useFav } from './favContext';
import useFetch from './useFetchCustomHook';

export default function FavoritesPage({ setActiveProductInfo }) {
  const [favProducts, setFavProducts] = useState([]);
  const { fav } = useFav();
  const { data, isLoading } = useFetch('https://fakestoreapi.com/products');

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
      <NavBar title='Favorites' />
      {favProducts.length === 0 ? (
        <p>You don't like anything from our shop. Ohhh. The duck is very sad. Add something to the basket to see the reaction on the duck's face.</p>
      ) : (
        <div className='fav_cont'>
          {isLoading ? <p>Loading...</p> : favProducts.map(product => (
            <Product 
              key={product.id}
              product={product}
              setActiveProductInfo={setActiveProductInfo}
            />
          ))}
        </div>
      )}
    </>
  );
}
