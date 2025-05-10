const API_BASE_URL = 'http://localhost:3000';

const API_ENDPOINTS = {
    PRODUCTS: `${API_BASE_URL}/products/allProducts`,
    PRODUCT_BY_ID: (id) => `${API_BASE_URL}/products/getProduct/${id}`,
    ORDERS: `${API_BASE_URL}/orders`,
    IMAGES: `${API_BASE_URL}/uploads`,
    COMMENTS: `${API_BASE_URL}/comments`, // Ruta para crear y obtener comentarios
    COMMENTS_BY_PRODUCT: (productId) => `${API_BASE_URL}/comments/product/${productId}`, // Ruta para obtener comentarios por producto
    RANDOM_COMMENTS: `${API_BASE_URL}/comments/random`, // Ruta para obtener 4 comentarios al azar
};

export { API_BASE_URL, API_ENDPOINTS };
