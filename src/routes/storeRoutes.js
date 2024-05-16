import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/home';
import Login from '../views/login';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import Detail from '../views/detail';
import Offer from '../views/offer';
import Error from '../views/error';
import Car from '../views/car';
import ScrollToTop from '../utils/scrollToTop';

function StoreRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/offer" element={<Layout><Offer /></Layout>} />
                <Route path="/login" element={<Login />} />
                <Route path="/detail/:id" element={<Layout><Detail /></Layout>} />
                <Route path="/car" element={<Layout><Car /></Layout>} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default StoreRouter;