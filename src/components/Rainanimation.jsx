import { useEffect } from "react";
import styled, { keyframes } from "styled-components"


const rainAnimationStyle = keyframes`
from {
  transform: rotate(105deg) translateX(0);
}
to {
  transform: rotate(105deg) translateX(calc(100vh + 20px));
}`;

const RainStyle = styled.hr`
  width: 50px;
  border-color: transparent;
  border-right-color: rgba(255, 255, 255, 0.7);
  border-right-width: 50px;
  position: absolute;
  bottom: 100%;
  transform-origin: 100% 50%;
  animation-name: ${rainAnimationStyle};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  `;

const Rainanimation = ({showRain}) => {
  useEffect(() => {
    const generateHrElements = () => {
      const counter = 100;
      for (let i = 0; i < counter; i++) {
        const hrElement = document.createElement("HR");
        hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
        hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
        hrElement.style.animationDelay = Math.random() * 5 + "s";
        document.body.appendChild(hrElement);
      }
    };

    if (showRain) {
      generateHrElements();
    }
    console.log(showRain);

    //* Cleanup function to remove the created elements when the component is unmounted
    return () => {
      const hrElements = document.querySelectorAll('HR');
      hrElements.forEach(element => element.remove());
    };
  }, [showRain]);
  return <>{showRain && <Rainanimation/>}</>;
};

export default Rainanimation;