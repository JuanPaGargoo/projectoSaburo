const API_BASE_URL = 'http://localhost:3000';

const API_ENDPOINTS = {
    PRODUCTS: `${API_BASE_URL}/api/products/allProducts`,
    PRODUCT_BY_ID: (id) => `${API_BASE_URL}/api/products/getProduct/${id}`,
    ORDERS: `${API_BASE_URL}/api/orders`,
    IMAGES: `${API_BASE_URL}/api/uploads`,
    COMMENTS: `${API_BASE_URL}/api/comments`, // Ruta para crear y obtener comentarios
    COMMENTS_BY_PRODUCT: (productId) => `${API_BASE_URL}/api/comments/product/${productId}`, // Ruta para obtener comentarios por producto
    RANDOM_COMMENTS: `${API_BASE_URL}/api/comments/random`, // Ruta para obtener 4 comentarios al azar
    CHATBOT_CHAT: `${API_BASE_URL}/api/chatbot/chat`, // Ruta para el chatbot
};

export { API_BASE_URL, API_ENDPOINTS };
