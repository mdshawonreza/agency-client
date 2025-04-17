import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import AnimCursor from '../pages/home/AnimCursor';
import ScrollToTop from '../shared/ScrollToTop';

const Root = () => {
    return (
        <div >
            <AnimCursor/>
            <ScrollToTop />
            <div className=''>
                <Navbar></Navbar>

            </div>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>

        
    );
};

export default Root;