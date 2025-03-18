import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

<<<<<<< Updated upstream
import Main from '../components/Main'
import ShoppingMain from '../components/ShoppingMain'
=======
import Main from '../components/Main';
import ProductSection from '../components/ProductSection';
import ProductDetails from '../components/ProductDetails';
import RatingAndReviews from '../components/RatingAndReviews';
>>>>>>> Stashed changes

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
<<<<<<< Updated upstream
            <Route path="/shopping-cart" element={<ShoppingMain />} />
=======
            <Route path="/product" element={<ProductSection />}>
                <Route path="productDetails" element={<ProductDetails />} />
                <Route path="rating&Reviews" element={<RatingAndReviews />} />
            </Route>
>>>>>>> Stashed changes
            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
    );
};

export default AppRouter;