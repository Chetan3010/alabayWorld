import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import RightArrow from "../Global/icons/RightArrow";
import RightArrowLight from "../Global/icons/RightArrowLight";
import { Link } from "react-router-dom";

const Games = () => {
    const [currentGame, setCurrentGame] = useState(0);
    const delayRef = useRef(null);
    const intervalRef = useRef(null);

    const games = [
        {
            id: 0,
            title: "Alabay Guard",
            image: "/images/games/alabay-guard.png",
            backgroundColor: "#843AFC",
            path: "/game/0-alabay-guard"
        },
        {
            id: 1,
            title: "Alabay Lost Heritage",
            image: "/images/games/alabay-lost-heritage.png",
            backgroundColor: "#45D689",
            path: "/game/1-alabay-lost-heritage"
        },
    ];

    const handleNext = () => {
        const nextGame = (currentGame + 1) % games.length;
        setCurrentGame(nextGame);
        clearTimeout(delayRef.current);
        delayRef.current = setTimeout(() => {
            intervalRef.current = setInterval(handleNext, 7000);
        }, 10000);
    };

    useEffect(() => {
        intervalRef.current = setInterval(handleNext, 7000);

        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(delayRef.current);
        };
    }, [handleNext]);

    return (
        <>
            <div className={styles.games}>
                <h1>GAMES</h1>
                <h5>Stay tuned for upcoming games !</h5>
                <div className={styles.gamesWrapper}>
                    <Link
                        to={games[currentGame].path}
                        style={{
                            backgroundColor: games[currentGame].backgroundColor,
                        }}
                        className={styles.discoverBtn}
                    >
                        DISCOVER <RightArrowLight color="#FFFFFF" />
                    </Link>
                    <div
                        style={{
                            transform: `translateX(-${currentGame * 100}%)`,
                        }}
                        className={styles.gameScroller}
                    >
                        {games.map((game) => (
                            <div className={styles.game} key={game.id}>
                                <img src={game.image} alt={game.title} />
                            </div>
                        ))}
                    </div>
                    <button
                        className={styles.nextBtn}
                        onClick={() => handleNext()}
                    >
                        <RightArrow />
                    </button>
                </div>
            </div>
            <div className={styles.gamePreview}>
                <h1><span>GAME</span> PREVIEW</h1>
                <div className={styles.gamePreviewWrapper}>
                    <div className={styles.gamePreviewScroller}>
                        <div className={styles.gamePreviewItem}>
                            <img
                                src="/images/games/preview/preview-1.png"
                                alt="Preview 1 Image"
                            />
                        </div>
                        <div className={styles.gamePreviewItem}>
                            <img
                                src="/images/games/preview/preview-2.png"
                                alt="Preview 2 Image"
                            />
                        </div>
                        <div className={styles.gamePreviewItem}>
                            <img
                                src="/images/games/preview/preview-3.png"
                                alt="Preview 3 Image"
                            />
                        </div>
                    </div>
                    <button className={styles.gamePreviewNextBtn}>
                        <RightArrow />
                    </button>
                </div>
            </div>
        </>
    );
};
export default Games;
