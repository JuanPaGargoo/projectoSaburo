import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Main from '../components/pages/Main';
import ShoppingMain from '../components/pages/ShoppingMain';
import ProductSection from '../components/pages/ProductSection';
import LoginSection from '../components/auth/LoginSection';
import SignUpSection from '../components/auth/SignUpSection';
import EditProfileSection from '../components/auth/EditProfileSection';
import FilteredProductsPage from '../components/pages/FilteredProductsPage'; // Importar el componente
import SearchModal from '../components/shared/SearchModal'; // Import the SearchModal


const AppRouter = ({ isModalOpen, searchQuery, onModalClose }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/shopping-cart" element={<ShoppingMain />} />
                <Route path="/product" element={<ProductSection />}/>
                <Route path="/login" element={<LoginSection />}/>
                <Route path="/signup" element={<SignUpSection />}/>
                <Route path="/edit-profile/:userId" element={<EditProfileSection />} />
                <Route path="/filtered-products" element={<FilteredProductsPage />} />
                <Route path="/*" element={<Navigate to="/"/>} />
            </Routes>
            <SearchModal isOpen={isModalOpen} onClose={onModalClose} searchQuery={searchQuery} />
        </>
    );
};

export default AppRouter;