import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../constants/api';

function useRandomProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get(API_ENDPOINTS.PRODUCTS);
                const allProducts = response.data;
                const randomProducts = allProducts
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 4);

                setProducts(randomProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []);

    return products;
}

export default useRandomProducts;
