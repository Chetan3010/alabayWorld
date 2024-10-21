import React from "react";
import styles from "./styles.module.css";
import Gallery from "./Gallery";

const History = () => {
    return (
        <>
            <div className={styles.historyWrapper}>
                <div className={styles.handler}></div>
                <div className={styles.contentWrapper}>
                    <div style={{ position: "relative", height: 'fit-content' }}>
                        <img
                            className={styles.contentImage}
                            src="/images/jumping-dog.png"
                            alt="Asian_Shepher_Dog_Jumping"
                        />
                        <div className={styles.contentImageShadow}></div>
                    </div>
                    <div className={styles.content}>
                        <h1>
                            History Of <br />
                            <span>ALABAY</span>
                        </h1>
                        <p>
                            The Central Asian Shepherd Dog, also known as
                            Alabay, has been a guardian of livestock and
                            property for centuries. Originating from Central
                            Asia, these dogs are renowned for their courage,
                            strength, and loyalty.
                        </p>
                    </div>
                </div>
            </div>
            <Gallery />
        </>
    );
};

export default History;
