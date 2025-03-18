import React from 'react';
import { Link } from 'react-router-dom';

function NavBarProductSection({ onSelectSection }) {
  return (
    <div className='flex flex-row gap-5'>
        <div>
            <button onClick={() => onSelectSection('details')}>
                <p>Product Details</p>
            </button>
        </div>
        <div>
            <button onClick={() => onSelectSection('reviews')}>
                <p>Rating & Reviews</p>
            </button>
        </div>
    </div>
  )
}

export default NavBarProductSection;