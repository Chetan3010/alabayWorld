import React, { useEffect, useRef, useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import History from "./components/History/History";
import Vision from "./components/Vision/Vision";
import Roadmap from "./components/Roadmap/Roadmap";

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
            </div>
        </div>
    );
};

export default App;
