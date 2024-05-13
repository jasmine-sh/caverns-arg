// import React from "react";
import PropTypes from 'prop-types';
// import "./Layout.css";

// Importing all created components
import Header from "./header.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import {Outlet} from "react-router-dom";


// Pass the child props
const Layout = () => {
    return (
        <div>
            <Header />
            <Navbar />
                <Outlet />
            <Footer />
        </div>
    );
}

export default Layout