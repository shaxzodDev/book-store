import React from 'react';
import Navbar from "./Navbar";

const Layout = (props) => {
    const {children} = props;
    return (
        <div className={`m-layout `}>
            <Navbar/>
            <div className="m-wrapper">
                {children}
            </div>
        </div>
    );
};

export default Layout;