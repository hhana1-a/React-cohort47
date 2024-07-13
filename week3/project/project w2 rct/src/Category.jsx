import React from 'react';

export default function Category({ category, activeCategory, setActiveCategory }) {

  const handleClick = () => {
    if (activeCategory === category) {
      setActiveCategory('');
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <li className='category-item'>
      <button 
        className={activeCategory === category ? 'active' : ''} 
        onClick={handleClick}
      >
        {category}
      </button>
    </li>
  );
}
