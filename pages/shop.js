import React from 'react';
import Navbar from '../components/_App/Navbar';
import { useSelector } from 'react-redux'
import PageBanner from '../components/Common/PageBanner';
import ProductCard from '../components/Shop/ProductCard';
import Footer from '../components/_App/Footer';

const Shop = () => {
    const products = useSelector((state) => state.products)
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Shop" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Shop" 
                imgClass="bg-24" 
            /> 
            <ProductCard products={products} />
            <Footer />
        </React.Fragment>
    );
}

export default Shop;