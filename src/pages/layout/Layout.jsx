import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import HeaderCategory from '../../components/mainCategory/HeaderCategory';

const Layout = () => {
  return (
    <div>
      <header>
        <Header />
        <HeaderCategory />
      </header>
      <main>
        <Outlet />
        {/* <IntroBanner /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;