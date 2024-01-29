import Quotecard from "./components/Quotecard";
import Searchbar from "./components/Searchbar";
import Weathercard from "./components/Weathercard";
import Historycard from "./components/Historycard";
import Forecastcard from "./components/Forecastcard";
import { useEffect, useState } from "react";
import { rainAnimation } from "./utilities/rainAnimation";
import { snowAnimation } from "./utilities/snowAnimation";
import "./styles/rainStyles.css";
import "./styles/snowStyles.css";
import Snowcanvas from "./components/Snowcanvas";

function App() {
    const [data, setData] = useState({});
    const [history, setHistory] = useState([]);
    const [forecast, setForecast] = useState({});
    const [clientCoord, setClientCoord] = useState({});
    const [isRainy, setIsRainy] = useState(false);
    const [isSnowy, setIsSnowy] = useState(false);
    console.log(isSnowy)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => setClientCoord({clientLat: position.coords.latitude, clientLong: position.coords.longitude}))
        // snowAnimation(isSnowy)
    }, [setClientCoord, isSnowy])

    rainAnimation(isRainy)
    
    

    return (
        <>
            <Snowcanvas onSnowy={isSnowy} />
            <div className="bg-[url('https://source.unsplash.com/1669x931/?landscape')] bg-cover flex flex-col h-screen justify-center w-full">
                    <div className="flex flex-col">
                            <div className="px-5 flex justify-center">
                                <Searchbar onSetSnowy={setIsSnowy} onSetRainy={setIsRainy} onSetForecast={setForecast} onSetData={setData} onSetHistory={setHistory} onHistory={history} />
                            </div>
                        <div className=" px-5 flex justify-center items-center">
                            <Quotecard onData={data} />
                            <div className="flex flex-row " >
                                <Forecastcard onForecast={forecast} className="" />
                                <Weathercard onClientCoord={clientCoord} onData={data} className=""/>
                                <Historycard onClientCoord={clientCoord} onHistory={history} onSetHistory={setHistory} onData={data} className="" />
                            </div>
                        </div>
                    </div>
                
            </div>
        </>
    );
}

export default App;
