import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../constants/api';

function useFilteredProducts({ filterGender, filterCategories, filterRecent, filterDiscount }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const params = new URLSearchParams();

        if (filterCategories && filterCategories.length > 0) {
          params.append('categories', filterCategories.join(','));
        }
        if (filterGender) {
          params.append('gender', filterGender);
        }
        if (filterRecent) {
          params.append('recent', 'true');
        }
        if (filterDiscount) {
          params.append('discount', 'true');
        }

        const url = `${API_ENDPOINTS.PRODUCTS}?${params.toString()}`;
        console.log('Fetching products with URL:', url); // Depuración
        const response = await axios.get(url);

        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [filterGender, filterCategories, filterRecent, filterDiscount]);

  return { products, loading };
}

export default useFilteredProducts;
