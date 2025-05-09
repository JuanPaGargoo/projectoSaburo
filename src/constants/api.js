const API_BASE_URL = 'http://localhost:3000';

const API_ENDPOINTS = {
    PRODUCTS: `${API_BASE_URL}/products/allProducts`,
    PRODUCT_BY_ID: (id) => `${API_BASE_URL}/products/getProduct/${id}`,
    ORDERS: `${API_BASE_URL}/orders`,
    IMAGES: `${API_BASE_URL}/uploads`, 
};
 
export { API_BASE_URL, API_ENDPOINTS };
