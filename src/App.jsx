import Quotecard from "./components/Quotecard";
import Searchbar from "./components/Searchbar";
import Weathercard from "./components/Weathercard";
import Historycard from "./components/Historycard";
import Forecastcard from "./components/Forecastcard";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components"

function App() {
  const [data, setData] = useState({});
  const [history, setHistory] = useState([]);
  const [forecast, setForecast] = useState({});
  const [clientCoord, setClientCoord] = useState({});
  const [isRainy, setIsRainy] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => setClientCoord({ clientLat: position.coords.latitude, clientLong: position.coords.longitude }));
  }, [setClientCoord]);

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

  if (isRainy) {
    generateHrElements()
  }

  return (
    <>
      <div className="bg-[url('https://source.unsplash.com/1669x931/?landscape')] bg-cover flex flex-col h-screen justify-center">
        <div className="flex flex-col">
          <div className="px-5 flex justify-center">
            <Searchbar onSetRainy={setIsRainy} onSetForecast={setForecast} onSetData={setData} onSetHistory={setHistory} onHistory={history} />
          </div>
          <div className=" px-5 flex justify-center items-center">
            <Quotecard onData={data} />
            <div className="flex flex-row " >
              <Forecastcard onForecast={forecast} className="" />
              <Weathercard onClientCoord={clientCoord} onData={data} className="" />
              <Historycard onClientCoord={clientCoord} onHistory={history} onSetHistory={setHistory} onData={data} className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

const rainAnimationStyle = keyframes`
from {
  transform: rotate(105deg) translateX(0);
}
to {
  transform: rotate(105deg) translateX(calc(100vh + 20px));
}`;

const RainStyle = styled.hr`
  z-index: 1;
  position: absolute;
  width: 50px;
  border-color: transparent;
  border-right-color: rgba(255, 255, 255, 0.7);
  border-right-width: 50px;
  bottom: 100%;
  transform-origin: 100% 50%;
  animation-name: ${rainAnimationStyle};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
