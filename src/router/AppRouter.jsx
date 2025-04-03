import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Main from '../components/Main'
import ShoppingMain from '../components/ShoppingMain'
import ProductSection from '../components/ProductSection';
import LoginSection from '../components/LoginSection';
import SignUpSection from '../components/SignUpSection';
import EditProfileSection from '../components/EditProfileSection';


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shopping-cart" element={<ShoppingMain />} />
            <Route path="/product" element={<ProductSection />}/>
            <Route path="/login" element={<LoginSection />}/>
            <Route path="/signup" element={<SignUpSection />}/>
            <Route path="/edit-profile/:userId" element={<EditProfileSection />} />

            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
    );
};

export default AppRouter;