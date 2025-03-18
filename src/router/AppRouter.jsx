import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Main from '../components/Main'
import ShoppingMain from '../components/ShoppingMain'
import ProductSection from '../components/ProductSection';


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shopping-cart" element={<ShoppingMain />} />
            <Route path="/product" element={<ProductSection />}>
            </Route>
            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
    );
};

export default AppRouter;