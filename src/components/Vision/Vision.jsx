import React from "react";
import styles from './styles.module.css'

const Vision = () => {
    return (
        <div className={styles.visionWrapper}>
            <h1 className={styles.visionTitle}>PROJECT VISION</h1>
            <div className={styles.visionMedia}>
                <img src="/images/dog-friends.png" alt="DOG_FRIENDS" />
                <div></div>
            </div>
            <p className={styles.visionDesc}>
                Our mission is to honor the heritage of the Alabay by creating a
                vibrant, loyal, and powerful community. Just as the Alabay
                protects its flock, we aim to build a pack that stands strong
                together.
            </p>
        </div>
    );
};

export default Vision;
