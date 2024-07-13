import { createContext, useContext, useState } from 'react';

const FavContext = createContext();

export const useFav = () => {
  return useContext(FavContext);
};

export const FavProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  const toggleFav = (productId) => {

    if (fav.includes(productId)) {
      setFav(fav.filter((id) => id !== productId));
    } else {
      setFav([...fav, productId]);
    }
  };

  return (
    <FavContext.Provider value={{ fav, toggleFav }}>
      {children}
    </FavContext.Provider>
  );
};