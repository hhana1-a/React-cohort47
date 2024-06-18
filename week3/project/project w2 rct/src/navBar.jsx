import { Link } from 'react-router-dom';

export default function NavBar({ title }) {
  return (
    <div className='nav-bar-container homepage-nav'>
      <h1>{title}</h1>
      <div>
      <Link to={`/`}>
        <button className='navbar-btn'>Products</button>
      </Link>
      <Link to={'/fav'}>
        <button className='navbar-btn'>Favorites</button>
      </Link>
      </div>  
    </div>
  )
}