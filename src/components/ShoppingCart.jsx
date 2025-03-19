import React from 'react';

import {Breadcrumbs, BreadcrumbItem} from "@heroui/react";
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    return (
        <div className="mx-14 my-5">
            <Breadcrumbs>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem>Cart</BreadcrumbItem>
            </Breadcrumbs>
        </div>
    );
};

export default ShoppingCart;