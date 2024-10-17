import React from "react";
import styles from './styles.module.css'

const RightArrow = ({ color= '#FFFFFF'}) => {
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
                <path fill={color} d="M94.4,42.6L67.6,15.8c-4.1-4.1-10.8-4.1-14.9,0c-4.1,4.1-4.1,10.8,0,14.9l8.8,8.8H13C7.2,39.5,2.5,44.2,2.5,50 S7.2,60.5,13,60.5h48.6l-8.9,8.9c-4.1,4.1-4.1,10.8,0,14.9c2.1,2.1,4.7,3.1,7.4,3.1s5.4-1,7.4-3.1l26.8-26.8c2-2,3.1-4.6,3.1-7.4 C97.5,47.2,96.4,44.5,94.4,42.6z" />
            </g>
        </svg>
    );
};

export default RightArrow;
