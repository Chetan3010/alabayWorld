import React from "react";
import styles from './styles.module.css'

const LeftArrow = ({ color = "#FFFFFF" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            style={{ enableBackground: "new 0 0 100 100" }}
            xmlSpace="preserve"
        >
            <g>
                <path
                    fill={color}
                    d="M5.6,57.4l26.8,26.8c4.1,4.1,10.8,4.1,14.9,0c4.1-4.1,4.1-10.8,0-14.9l-8.8-8.8H87c5.8,0,10.5-4.7,10.5-10.5 S92.8,39.5,87,39.5H38.4l8.9-8.9c4.1-4.1,4.1-10.8,0-14.9c-2.1-2.1-4.7-3.1-7.4-3.1s-5.4,1-7.4,3.1L5.6,42.6c-2,2-3.1,4.6-3.1,7.4 C2.5,52.8,3.6,55.5,5.6,57.4z"
                />
            </g>
        </svg>
    );
};

export default LeftArrow;
