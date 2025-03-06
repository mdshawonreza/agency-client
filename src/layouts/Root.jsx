import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import AnimCursor from '../pages/home/AnimCursor';

const Root = () => {
    return (
        <div >
            <AnimCursor/>
            <div className=''>
                <Navbar></Navbar>

            </div>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>

        
    );
};

export default Root;