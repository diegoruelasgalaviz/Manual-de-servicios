import React from 'react';
import Navbar from '../../components/_App/Navbar';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PageBanner from '../../components/Common/PageBanner';
import ProductsDetailsTab from '../../components/ProductDetails/ProductsDetailsTab';
import ProductDetailsContent from '../../components/ProductDetails/ProductDetailsContent';
import Footer from '../../components/_App/Footer';

const ProductDetails = () => {
    const router = useRouter()
    const products = useSelector((state) => state.products)
    const id = router.query.id
    const product = products.find(p => p.id === id)
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Product Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Product Details" 
                imgClass="bg-22" 
            /> 
 
            <div className="product-details-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <ProductDetailsContent {...product} />

                        <div className="col-lg-12 col-md-12">
                            <ProductsDetailsTab {...product} />
                        </div>
                    </div>
                </div>
            </div>
    
            <Footer />
        </React.Fragment>
    );
}

export default ProductDetails;