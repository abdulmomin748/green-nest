import React from 'react';
import Header from '../components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import RootProvider from '../provider/RootProvider';
import { ToastContainer } from 'react-toastify'
const MainLayout = () => {
    const plantsData = useLoaderData();
    
    
    return (
        <div>
            {/* props drilling for sending data up to bottom like parent to chilred */}
            <RootProvider plantsData = { plantsData }>
                <Header />
                    <Outlet />
                <Footer />
                <ToastContainer autoClose={3000}/>
            </RootProvider>
        </div>
    );
};

export default MainLayout;