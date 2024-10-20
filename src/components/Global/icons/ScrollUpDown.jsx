import React from "react";

const ScrollUpDown = ({ rotate = 0, color = "#000000" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            x="0px"
            y="0px"
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <path
                d="M4.57,29.23a2.94,2.94,0,0,0,3,.06L27.31,18.64a3,3,0,0,0,0-5.28L7.53,2.71A3,3,0,0,0,3.11,5.35v21.3A3,3,0,0,0,4.57,29.23Z"
                fill={color}
            />
        </svg>
    );
};

export default ScrollUpDown;
