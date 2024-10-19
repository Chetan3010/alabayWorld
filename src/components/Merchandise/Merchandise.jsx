import React from "react";
import styles from "./styles.module.css";
import LeftArrowLight from "../Global/icons/LeftArrowLight";
import RightArrowLight from "../Global/icons/rightArrowLight";

const Merchandise = () => {
    return (
        <div className={styles.merchandise}>
            <h1 className={styles.merchandiseTitle}>MERCHANDISE</h1>
            <div className={styles.merchandiseWrapper}>
                <button>
                    <LeftArrowLight />
                </button>
                <div>
                    {/* <img src="/images/merch/black-hoddie.png" alt="BLACK_HOODIE" /> */}
                    <img src="/images/merch/blue-cap.png" alt="BLUE_CAP" />
                </div>
                <button>
                    <RightArrowLight />
                </button>
            </div>
        </div>
    );
};

export default Merchandise;
