import React from "react";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import MobileHeader from "../components/MobileHeader";

function HomePage () {

    const screenWidth = window.screen.availWidth;

    return <>
        {screenWidth >= 978  ? 
            <Header />
            : <MobileHeader/>
        }
        <HeroContainer />
    </>

}

export default HomePage;