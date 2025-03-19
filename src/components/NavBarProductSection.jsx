import React, { useState } from 'react';

function NavBarProductSection({ onSelectSection }) {
  const [selectedSection, setSelectedSection] = useState('details');

  const handleClick = (section) => {
    setSelectedSection(section);
    onSelectSection(section);
  };

  return (
    <div className='flex flex-row w-full border-b-2 border-gray-200'>
        <div className='w-1/2 text-center'>
            <button 
                className={` w-full py-2 transition-all duration-200 text-xl font-semibold ${
                  selectedSection === 'details' ? 'border-b-4 border-cafeCacao text-cafeCacao' : 'border-b-4 border-transparent text-gray-400  hover:text-cafeCacao'
                }`}
                onClick={() => handleClick('details')}
            >
                <p>Product Details</p>
            </button>
        </div>
        <div className='w-1/2 text-center'>
            <button 
                className={`w-full py-2 transition-all duration-200 text-xl font-semibold  ${
                  selectedSection === 'reviews' ? 'border-b-4 border-cafeCacao text-cafeCacao' : 'border-b-4 border-transparent text-gray-400  hover:text-cafeCacao'
                }`}
                onClick={() => handleClick('reviews')}
            >
                <p>Rating & Reviews</p>
            </button>
        </div>
    </div>
  )
}

export default NavBarProductSection;