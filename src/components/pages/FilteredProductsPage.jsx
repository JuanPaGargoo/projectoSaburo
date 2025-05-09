import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFilteredProducts from '../../hooks/useFilteredProducts';
import ClothingCard from '../shared/ClothingCard';

function FilteredProductsPage() {
  const [searchParams] = useSearchParams();

  const filterParams = useMemo(() => {
    const filterGender = searchParams.get('gender');
    const filterCategories = searchParams
      .get('categories')
      ?.split(',')
      .map(category => 
        category.trim().toLowerCase() === 'accessories' ? 'accessory' : 
        category.trim().toLowerCase() === 'pants' ? 'pants' : 
        category.trim().toLowerCase().replace(/s$/, '')
      ) || [];
    const filterRecent = searchParams.get('recent') === 'true';
    const filterDiscount = searchParams.get('discount') === 'true';

    return { filterGender, filterCategories, filterRecent, filterDiscount };
  }, [searchParams]);

  const { products, loading } = useFilteredProducts(filterParams);

  console.log('Filtered products:', products); // Depuración

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10">
      <div className="flex flex-wrap gap-10 mb-4 max-w-[1000px]">
        {products.map(product => (
          <ClothingCard key={product.id} id={product.id} />
        ))}
      </div>
    </div>
  );
}

export default FilteredProductsPage;
