import React, { useRef, useState } from "react";
import LeftArrow from "../Global/icons/LeftArrow";
import RightArrow from "../Global/icons/RightArrow";
import styles from "./styles.module.css";

const Gallery = () => {
    const translateY = 104;

    const gallery = [
        {
            id: 1,
            title: "PHOTO 1",
            media_type: "photo",
        },
        {
            id: 2,
            title: "VIDEO 1",
            media_type: "video",
        },
        {
            id: 3,
            title: "PHOTO 2",
            media_type: "photo",
        },
        {
            id: 4,
            title: "VIDEO 2",
            media_type: "video",
        },
        {
            id: 5,
            title: "PHOTO 3",
            media_type: "photo",
        },
        {
            id: 6,
            title: "VIDEO 3",
            media_type: "video",
        },
        {
            id: 7,
            title: "PHOTO 4",
            media_type: "photo",
        },
        {
            id: 8,
            title: "VIDEO 4",
            media_type: "video",
        },
        {
            id: 9,
            title: "PHOTO 5",
            media_type: "photo",
        },
        {
            id: 10,
            title: "VIDEO 5",
            media_type: "video",
        },
    ];

    const [data, setData] = useState(gallery);
    const [activeMediaTyep, setActiveMediaType] = useState("all");
    const [translateX, setTranslateX] = useState(0);
    const galleryCardsRef = useRef(null);
    const cardRef = useRef(null);

    const handlerSort = (media_type) => {
        if (media_type === "all") {
            setData(gallery);
        } else {
            setData(() =>
                gallery.filter((item) => item.media_type === media_type)
            );
        }
        setActiveMediaType(media_type);
    };

    const handlePrev = () => {
        const containerWidth = galleryCardsRef.current.offsetWidth;
        const newTranslateX = translateX + containerWidth;
        
        // Prevent translation past the initial position
        setTranslateX(Math.min(newTranslateX, 0));
    };
    
    const handleNext = () => {
        const containerWidth = galleryCardsRef.current.offsetWidth;
        const totalItems = data.length;
        const itemWidth = cardRef.current.offsetWidth;
        
        const totalWidth = totalItems * itemWidth;
        console.log(totalWidth);
        
        const maxTranslateX = containerWidth - totalWidth; // Updated logic
    
        const newTranslateX = translateX - containerWidth;
        
        // Prevent translation beyond the last card
        setTranslateX(Math.max(newTranslateX, maxTranslateX));
    };
    
    

    return (
        <div className={styles.gallery}>
            <div className={styles.galleryTitles}>
                <h1
                    style={{
                        color: `${
                            activeMediaTyep === "all" ? "#FFA800" : "#000000"
                        }`,
                    }}
                    onClick={() => handlerSort("all")}
                >
                    ALL
                </h1>
                <h1
                    style={{
                        color: `${
                            activeMediaTyep === "photo" ? "#FFA800" : "#000000"
                        }`,
                    }}
                    onClick={() => handlerSort("photo")}
                >
                    PHOTOS
                </h1>
                <h1
                    style={{
                        color: `${
                            activeMediaTyep === "video" ? "#FFA800" : "#000000"
                        }`,
                    }}
                    onClick={() => handlerSort("video")}
                >
                    VIDEOS
                </h1>
            </div>

            <div className={styles.galleryMedia}>
                <button onClick={() => handlePrev()}>
                    <LeftArrow />
                </button>
                <div className={styles.galleryWrapper}>
                    <div
                        style={{ transform: 'translateX('+translateX+'px)' }}
                        className={styles.galleryCards}
                        ref={galleryCardsRef}
                    >
                        {data.map((item) => (
                            <div ref={cardRef} key={item.id}>{item.title}</div>
                        ))}
                    </div>
                </div>
                <button onClick={() => handleNext()}>
                    <RightArrow />
                </button>
            </div>
        </div>
    );
};

export default Gallery;
