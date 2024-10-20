import React, { useEffect, useRef, useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import History from "./components/History/History";
import Vision from "./components/Vision/Vision";
import Roadmap from "./components/Roadmap/Roadmap";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Merchandise from "./components/Merchandise/Merchandise";
import Games from "./components/Games/Games";
import SocialMediaLinks from "./components/Footer/SocialMediaLinks";

const App = () => {
    const drawerRef = useRef(null);

    useEffect(() => {
        const handleScroll = (e) => {
            
            if (e.deltaY > 0) {
                drawerRef.current.style.top = "4%";
            } else {
                if (drawerRef.current.scrollTop === 0) {
                    drawerRef.current.style.top = "94%";
                }
            }
        };

        document.addEventListener("wheel", handleScroll);

        return () => document.removeEventListener("wheel", handleScroll);
    }, []);

    return (
        <div className="main">
            <LandingPage />
            <div className="drawerWrapper" ref={drawerRef}>
                <History />
                <Vision />
                <Roadmap />
                <Tokenomics />
                <Merchandise />
                <Games />
                <SocialMediaLinks />
            </div>
        </div>
    );
};

export default App;
