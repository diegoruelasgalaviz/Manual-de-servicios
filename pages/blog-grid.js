import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogThreeGrid from '../components/Blog/BlogThreeGrid';
import Footer from '../components/_App/Footer';

const BlogGrid = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Blog Grid" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Grid" 
                imgClass="bg-15" 
            /> 
            <BlogThreeGrid />
            <Footer />
        </React.Fragment>
    );
}

export default BlogGrid;