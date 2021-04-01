import React from 'react';
import Link from 'next/link';
import AddToCart from './AddToCart';

const ProductCard = ({ products }) => {
    return (
        <div className="product-area ptb-100">
            <div className="container">
                {/* <div className="woocommerce-topbar">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-7 col-sm-6">
                            <div className="woocommerce-result-count">
                                <p>Showing 1-8 of 14 results</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-5 col-sm-6">
                            <div className="woocommerce-topbar-ordering">
                                <select className="form-control" id="Sorting">
                                    <option>Default sorting</option>
                                    <option>Antiseptics</option>
                                    <option>Medical Gloves</option>
                                    <option>Drugs</option>
                                    <option>Aspirin</option>
                                    <option>Hand Sanitizer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="row">
                    {products.length ? products.map(product => (
                        <div className="col-lg-4 col-sm-6" key={product.id}>
                            <div className="single-product-box">
                                <div className="product-image">
                                    <Link href="/product/[id]" as={`/product/${product.id}`}>
                                        <a>
                                            <img src={product.image} alt="Image" />
                                        </a>
                                    </Link>

                                    <Link href="/cart">
                                        <a className="add-to-cart-btn">Add To Cart</a>
                                    </Link>

                                    <AddToCart btnClass="add-to-cart-btn" {...product} />
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="/product/[id]" as={`/product/${product.id}`}>
                                            <a>{product.title}</a>
                                        </Link>
                                    </h3>

                                    <div className="price">
                                        <span className="new">${product.price - 3}</span>
                                        <span className="old">${product.price}</span>
                                    </div>
                                    
                                    <div className="rating">
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <h2>Empty</h2>
                    )}

					{/* Pagination */}
                    <div className="col-lg-12">
                        <div className="page-navigation-area text-center">
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link page-links">
                                            <i className='bx bx-chevrons-left'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li className="page-item active">
                                    <Link href="#">
                                        <a className="page-link">1</a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link">2</a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link">3</a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link">
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;