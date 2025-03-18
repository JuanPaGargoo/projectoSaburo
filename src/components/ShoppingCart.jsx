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
            <h1 className="text-2xl font-abrilFatface text-cafeCacao text-4xl my-10">Your Cart</h1>
        </div>
    );
};

export default ShoppingCart;