import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import Play from "../Global/icons/Play";
import ScrollUpDown from "../Global/icons/ScrollUpDown";

const GamePreview = () => {
    const gamePreviewsData = {
        0: {
            title: "ALABAY GUARDIAN",
            tagline: "SHEPHERD OF THE STEPPES",
            themeColor: "#A4A8FF",
            backgroundImage: "/images/games/alabay-guard/background.png",
            backgroundImage2: "/images/games/alabay-guard/background-2.png",
            description:
                "Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.",
            previews: [
                "/images/games/alabay-guard/1-alabay-guard.png",
                "/images/games/alabay-guard/2-alabay-guard.png",
                "/images/games/alabay-guard/3-alabay-guard.png",
            ],
        },
        1: {
            title: "ALABAY HERITAGE",
            tagline: "THE LOST ADVENTURE",
            themeColor: "#91FFAE",
            backgroundImage: "/images/games/alabay-heritage/background.png",
            backgroundImage2: "/images/games/alabay-heritage/background-2.png",
            description:
                "Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.",
            previews: [
                "/images/games/alabay-heritage/1-overview.png",
                "/images/games/alabay-heritage/2-abilities.png",
                "/images/games/alabay-heritage/3-artifacts.png",
                "/images/games/alabay-heritage/4-locations.png",
            ],
        },
    };

    const params = useParams();
    const id = params.id.split("-")[0];

    const [currentSection, setCurrentSection] = useState(0);
    const touchStartYRef = useRef(null);
    const navigate = useNavigate();

    const {
        title,
        tagline,
        themeColor,
        backgroundImage,
        backgroundImage2,
        description,
        previews,
    } = gamePreviewsData[id];

    const handleScroll = (e) => {
        if (e.deltaY > 0 && currentSection < 1) {
            setCurrentSection(1);
        } else if (e.deltaY < 0 && currentSection > 0) {
            setCurrentSection(0);
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
            setCurrentSection(1);
        } else if (touchDelta < -50) {
            setCurrentSection(0);
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [currentSection]);

    return (
        <div
            className={styles.gamePreview}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className={styles.scrollBar}>
                <button
                    style={{
                        backgroundColor:
                            currentSection === 0
                                ? "rgba(255, 255, 255, 0.30)"
                                : themeColor,
                        cursor: currentSection === 0 ? "default" : "pointer",
                    }}
                    className={styles.scrollUp}
                    onClick={() => setCurrentSection(0)}
                    disabled={currentSection === 0}
                >
                    <ScrollUpDown
                        color={currentSection === 0 ? "#FFFFFF" : "#000000"}
                        rotate={-90}
                    />
                </button>
                <div
                    className={styles.scroller}
                    onClick={() =>
                        setCurrentSection(currentSection === 0 ? 1 : 0)
                    }
                >
                    <div
                        style={{
                            transform: `translateY(${currentSection * 100}%)`,
                            backgroundColor: themeColor,
                        }}
                    ></div>
                </div>
                <button
                    style={{
                        backgroundColor:
                            currentSection === 1
                                ? "rgba(255, 255, 255, 0.30)"
                                : themeColor,
                        cursor: currentSection === 1 ? "default" : "pointer",
                    }}
                    className={styles.scrollDown}
                    onClick={() => setCurrentSection(1)}
                    disabled={currentSection === 1}
                >
                    <ScrollUpDown
                        color={currentSection === 1 ? "#FFFFFF" : "#000000"}
                        rotate={90}
                    />
                </button>
            </div>
            <img
                className={styles.gamePreviewBackground}
                src={window.innerWidth > 768 ? backgroundImage : backgroundImage2}
                alt={title}
            />
            <div
                className={styles.gamePreviewHeading}
                style={{
                    transform:
                        currentSection === 0
                            ? "translateY(0%)"
                            : "translateY(-30px)",
                }}
            >
                <h1>{title}</h1>
                <h5 style={{ color: themeColor }}>{tagline}</h5>
            </div>
            <div>
                <div
                    className={styles.section1}
                    style={{
                        opacity: currentSection === 0 ? 1 : 0,
                        transform:
                            currentSection === 0
                                ? "translateY(0%)"
                                : "translateY(-20px)",
                    }}
                >
                    <p>{description}</p>
                    <button style={{ backgroundColor: themeColor }}>
                        <Play /> <span>PLAY</span>
                    </button>
                    <div className={styles.gamePreviewWrapper}>
                        <h1>
                            <span style={{ color: themeColor }}>GAME</span>{" "}
                            PREVIEWS
                        </h1>
                        <div className={styles.previews}>
                            {previews.map((preview, index) => (
                                <img key={index} src={preview} alt={title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={styles.section2}
                style={{
                    transform:
                        currentSection === 1
                            ? "translateY(-100%)"
                            : "translateY(0%)",
                    opacity: currentSection === 1 ? 1 : 0,
                }}
            >
                <h1 style={{ color: themeColor }}>FEATURES</h1>
                <p style={{ "--themeColor": themeColor }}>
                    Explore a variety of landscapes, including{" "}
                    <span style={{ color: themeColor }}>mountains</span>,
                    <span style={{ color: themeColor }}>forests</span>,{" "}
                    <span style={{ color: themeColor }}>deserts</span>, and{" "}
                    <span style={{ color: themeColor }}>ancient ruins</span>.
                </p>
                <p style={{ "--themeColor": themeColor }}>
                    Use the Alabay's{" "}
                    <span style={{ color: themeColor }}>abilities</span> to
                    solve <span style={{ color: themeColor }}>puzzles</span>{" "}
                    that involve moving objects, activating mechanisms, or
                    finding hidden clues.
                </p>
                <p style={{ "--themeColor": themeColor }}>
                    Discover relics that tell the story of the Alabay’s
                    ancestors, each piece contributing to a larger narrative
                    about the breed's role in ancient history.
                </p>
                <p style={{ "--themeColor": themeColor }}>
                    Unlock new skills and abilities for the Alabay, enhancing
                    its capacity to explore and solve puzzles.
                </p>
                <div className={styles.challengeModes}>
                    <h5>Challenge Modes:</h5>
                    <p>
                        -{" "}
                        <span style={{ color: themeColor }}>Time Trials:</span>{" "}
                        Compete in special timed challenges where the Alabai
                        must navigate through complex mazes or complete puzzles
                        within a time limit.
                    </p>
                    <p>
                        -{" "}
                        <span style={{ color: themeColor }}>
                            Exploration Mastery:
                        </span>{" "}
                        A mode that rewards players for fully exploring every
                        nook and cranny of the game’s world, uncovering all
                        secrets
                    </p>
                </div>

                <div className={styles.buttons}>
                    <button>
                        <Play /> PLAY
                    </button>
                    <button onClick={() => navigate("/")}>EXIT</button>
                </div>
            </div>
        </div>
    );
};

export default GamePreview;
