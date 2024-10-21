import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import LeftArrowLight from "../Global/icons/LeftArrowLight";
import RightArrowLight from "../Global/icons/rightArrowLight";

const Merchandise = () => {
    const [currentItem, setCurrentItem] = useState(0);
    const merchBgRef = useRef(null);
    const intervalRef = useRef(null);

    const merchandiseItems = [
        {
            id: 0,
            title: "BLUE_CAP",
            image: "/images/merch/blue-cap.png",
            backgroundImage: "/images/merch/blue-cap-bg.jpg",
        },
        {
            id: 1,
            title: "PINK_TEE",
            image: "/images/merch/pink-tee.png",
            backgroundImage: "/images/merch/pink-tee-bg.jpg",
        },
        {
            id: 2,
            title: "YELLOW_TEE",
            image: "/images/merch/yellow-tee.png",
            backgroundImage: "/images/merch/yellow-tee-bg.jpg",
        },
        {
            id: 3,
            title: "BLACK_HOODIE",
            image: "/images/merch/black-hoddie.png",
            backgroundImage: "/images/merch/black-hoddie-bg.jpg",
        },
    ];

    const handleNextItem = () => {
        const nextItem = (currentItem + 1) % merchandiseItems.length;
        setCurrentItem(nextItem);
        merchBgRef.current.style.backgroundImage = `url(${merchandiseItems[nextItem].backgroundImage})`;
    };

    const handlePrevItem = () => {
        const prevItem =
            (currentItem - 1 + merchandiseItems.length) %
            merchandiseItems.length;
        setCurrentItem(prevItem);
        merchBgRef.current.style.backgroundImage = `url(${merchandiseItems[prevItem].backgroundImage})`;
    };

    useEffect(() => {
        intervalRef.current = setInterval(handleNextItem, 5000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [currentItem]);

    return (
        <div className={styles.merchandise}>
            <h1 className={styles.merchandiseTitle}>MERCHANDISE</h1>
            <div
                className={styles.merchandiseWrapper}
                ref={merchBgRef}
                style={{
                    backgroundImage: `url(${merchandiseItems[0].backgroundImage})`,
                }}
            >
                <button onClick={handlePrevItem}>
                    <LeftArrowLight />
                </button>
                <h1>Coming Soon...</h1>
                <div className={styles.merchandiseItems}>
                    <button className={styles.discoverBtn}>Discover</button>
                    <div
                        className={styles.merchandiseScroller}
                        style={{
                            transform: `translateX(-${currentItem * 100}%)`,
                        }}
                    >
                        {merchandiseItems.map((item) => (
                            <div
                                key={item.id}
                                className={styles.merchandiseItem}
                            >
                                <img src={item.image} alt={item.title} />
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleNextItem}>
                    <RightArrowLight />
                </button>
            </div>
        </div>
    );
};

export default Merchandise;
