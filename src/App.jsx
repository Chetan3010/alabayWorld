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
    const touchStartYRef = useRef(null);

    const handleScroll = (e) => {
        if (e.deltaY > 0) {
            drawerRef.current.style.top = "20px";
            drawerRef.current.style.overflow = "scroll";
        } else {
            if (drawerRef.current.scrollTop === 0) {
                drawerRef.current.style.top = "94%";
                drawerRef.current.style.overflow = "hidden";
            }
        }
    };

    const handleTouchStart = (e) => {
        touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        // e.preventDefault();
    };

    const handleTouchEnd = (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const touchDelta = touchStartYRef.current - touchEndY;
        if (touchDelta > 50) {
            drawerRef.current.style.top = "20px";
            drawerRef.current.style.overflow = "scroll";
        } else if (touchDelta < -50) {
            if (drawerRef.current.scrollTop === 0) {
                drawerRef.current.style.top = "94%";
                drawerRef.current.style.overflow = "hidden";
            }
        }
    };

    return (
        <div
            className="main"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleScroll}
        >
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
