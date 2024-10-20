import React from "react";
import styles from "./styles.module.css";
import BubbleSpeech from "./BubbleSpeech";

const SocialMediaLinks = () => {
    return (
        <div className={styles.socialMediaLinks}>
            <h1>
                SOCIAL MEDIA <br /> LINKS
            </h1>
            <div className={styles.socialMediaLinksWrapper}>
                <div className={styles.linksWrapper}>
                    <BubbleSpeech />
                    <div className={styles.links}>
                        <div className={styles.link}>
                            <div>
                                <img
                                    src="/images/twitter-logo.png"
                                    alt="Twitter Logo"
                                />
                            </div>
                            <h5>Twitter Link</h5>
                        </div>
                        <div className={styles.link}>
                            <div>
                                <img
                                    src="/images/telegram-logo.png"
                                    alt="Telegram Logo"
                                />
                            </div>
                            <h5>Telegram Link</h5>
                        </div>
                    </div>
                </div>
                <div className={styles.socialDogWrapper}>
                    <img src="/images/social-dog.png" alt="SOCIAL DOG" />
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaLinks;
