import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Product from '../pages/Product';
import Slider from '../components/Slider';

export const Home = () => {
    return (
        <div className="container">
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Products/>
            {/* <Slider/>
            <Categories/> */}
            {/* <Product/> */}
            {/* <Newsletter/> */}
            <Footer/>
        </div>
    )
}
