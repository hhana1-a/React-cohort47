
import heartRegular from '../assets/heart-regular.svg'
import heartSolid from '../assets/heart-solid.svg'
import NavBar from './navBar';
import { useFav } from './favContext'

function ProductDetailPage({ activeProductInfo }) {
  const { fav, toggleFav} = useFav();
  const isFavorite = fav.includes(activeProductInfo.id);

  const handleFav = () => {
    toggleFav(activeProductInfo?.id);
  };

  return (
    <>
    <NavBar title={activeProductInfo.title}/>
      <div className='product-detail'>
        <div className='product-detail-image-container'>
          <img src={activeProductInfo.image} alt={activeProductInfo.description} className='product-detail-img'/>
          </div>
          <p className='product-description'>{activeProductInfo.description}</p>
          <div className='favorite-btn-container'>
            <img  className='heart_icon' src={isFavorite ? heartSolid : heartRegular} onClick={handleFav}/>
          
        </div>
      </div>
    </>
  );
};
  export default ProductDetailPage;