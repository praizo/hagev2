import React from 'react';
// import HeaderInfo from '../navigation/HeaderInfo';
import Navbar from '../navigation/Navbar';
import Footer from '../Footer/Footer';
import MobileMenu from '../navigation/MobileMenu';

const Layout = ({ children }) => {
  return (
    <div>
      <header className="z-50 fixed w-full">
        {/* <HeaderInfo /> */}
        <div className="hidden  xl:grid">
          <Navbar />
        </div>
        <div className="xl:hidden">
          <MobileMenu />
        </div>
      </header>
      <main className="min-h-[75vh] w-full">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
