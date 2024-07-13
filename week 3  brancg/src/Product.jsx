import { Link } from 'react-router-dom';
import { useFav } from './favContext';
import heartRegular from '../assets/heart-regular.svg'
import heartSolid from '../assets/heart-solid.svg'

export default function Product({ product, setActiveProductInfo }) {
  const { fav, toggleFav } = useFav();
  const isFavorite = fav.includes(product.id);

  const handleClick = () => {
    setActiveProductInfo(product);
  }

  const handleFav = (e) => {
    e.preventDefault();
    toggleFav(product.id);
  };
  
  return (
    <li className='product-card'>
        <Link to={`/product/${product?.id}`} onClick={handleClick}> 
        <img src={product?.image} alt={product?.description} className='product-detail-img'/>
        <div className='favorite-btn-container'>
         
          <img src={isFavorite ? heartSolid : heartRegular} alt={isFavorite ? 'favorited' : 'not favorited'} className='heart_icon' onClick={handleFav}/>
        </div>
        <p className='product-title'>{product?.title}</p>
      </Link>
    </li>
  );
};