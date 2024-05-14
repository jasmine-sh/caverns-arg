// Importing all created components
import Header from "./header.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import {Outlet} from "react-router-dom";


// Pass the child props
const Layout = () => {
    return (
        <div className="verticalLayout">
            <Header />
            <div className="horizontalLayout">
                <Navbar />
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}

export default Layout