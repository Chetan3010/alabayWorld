import React from "react";
import styles from "./styles.module.css";

const Roadmap = () => {
    return (
        <div className={styles.roadmapWrapper}>
            <h1 className={styles.roadmapTitle}>ROAD MAP</h1>
            <div className={styles.roadmapContent}>
                <div className={styles.roadmapInfo}>
                    <p>
                        Our journey is just beginning. Explore our roadmap to
                        see the exciting milestones and future plans we have in
                        store.
                    </p>
                    <span>Join us as we grow and achieve new heights.</span>
                </div>
                <div className={styles.roadmapMedia}>
                    <img src="/images/guide-dog.png" alt="GUIDE_DOG" />
                    <div></div>
                </div>
            </div>
            <div className={styles.roadmapPosters}>
                <div>
                    <h1>
                        Community Building <br />
                        <span>and Initial Launch</span>
                    </h1>
                    <img src="/images/dog-builder.png" alt="CONSTRUCTION_WORKER_DOG" />
                </div>
                <div>
                    <h1>
                        Merchandise <br />
                        <span>Store Launch</span>
                    </h1>
                    <img src="/images/dog-bluetshirt.png" alt="DOG_WITH_BLUE_TSHIRT" />
                </div>
                <div>
                    <h1>
                        Community Events <br />
                        <span>and contests</span>
                    </h1>
                    <img src="/images/dog-trophy.png" alt="DOG_WINNER" />
                </div>
                <div>
                    <h1>
                        Expansion 
                        <br />
                        and New <br />
                        <span>Features</span>
                    </h1>
                    <img src="/images/dog-viking.png" alt="DOG_VIKING" />
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
