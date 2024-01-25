import Quotecard from "./components/Quotecard";
import Searchbar from "./components/Searchbar";
import Weathercard from "./components/Weathercard";
import Historycard from "./components/Historycard";
import Forecastcard from "./components/Forecastcard";
import { useEffect, useState } from "react";
import { rainAnimation } from "./utilities/rainAnimation";
import "./styles/rainStyles.css";

function App() {
    const [data, setData] = useState({});
    const [history, setHistory] = useState([]);
    const [forecast, setForecast] = useState({});
    const [clientCoord, setClientCoord] = useState({});
    const [isRainy, setIsRainy] = useState(false);
    console.log(data);
    console.log(history)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => setClientCoord({clientLat: position.coords.latitude, clientLong: position.coords.longitude}));
    }, [setClientCoord])

    rainAnimation(isRainy)

    return (
        <>
            <div className="bg-[url('https://source.unsplash.com/1669x931/?landscape')] bg-cover flex flex-col h-screen justify-center w-full">
                    <div className="flex flex-col">
                            <div className="px-5 flex justify-center">
                                <Searchbar onSetRainy={setIsRainy} onSetForecast={setForecast} onSetData={setData} onSetHistory={setHistory} onHistory={history} />
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
