import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Main from '../components/Main'
import ShoppingMain from '../components/ShoppingMain'
import ProductSection from '../components/ProductSection';
import LoginSection from '../components/LoginSection';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shopping-cart" element={<ShoppingMain />} />
            <Route path="/product" element={<ProductSection />}/>
            <Route path="/login" element={<LoginSection />}/>
            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
    );
};

export default AppRouter;