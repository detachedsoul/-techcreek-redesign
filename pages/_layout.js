import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Context } from "../components/Context"

const Layout = ({ children }) => {

    const [navIsActive, setNavActive] = useState(false);

    return (
        <Context.Provider value={{navIsActive, setNavActive}}>
            
            <Header />

            {children}

            <Footer />

        </Context.Provider>
    );
};

export default Layout;
