import React from 'react';
import { faDivide } from '@fortawesome/free-solid-svg-icons';
import Typed from "react-typed";

const Header = () => (
    <div className="header-wraper">
        <div className="main-info">
            <h1>Web Development and websites promotions</h1>  
            <Typed 
                className="typed-text"
                strings={
                [
                    "Web Development",
                    "Software Engineering",
                    "Facebooks Ads SMM",
                    "Google Ads"
                ]
                }
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <a hrf="#" className="btn-main-offer">contact me</a>

        </div>   
    </div>   
);

export default Header;