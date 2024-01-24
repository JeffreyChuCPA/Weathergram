import Quotecard from "./components/Quotecard";
import Searchbar from "./components/Searchbar";
import Weathercard from "./components/Weathercard";
import Historycard from "./components/Historycard";
import Forecastcard from "./components/Forecastcard";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState({});
    const [history, setHistory] = useState([]);
    const [forecast, setForecast] = useState({});
    const [clientCoord, setClientCoord] = useState({})
    console.log(data);
    console.log(history);
    console.log(forecast);
    console.log(clientCoord);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => setClientCoord({clientLat: position.coords.latitude, clientLong: position.coords.longitude}));
    }, [setClientCoord])

    return (
        <>
            <div className="bg-[url('https://source.unsplash.com/1669x931/?landscape')] bg-cover flex flex-col h-screen justify-center">
                <div className="flex flex-col">
                        <div className="px-5 flex justify-center">
                            <Searchbar onSetForecast={setForecast} onSetData={setData} onSetHistory={setHistory} onHistory={history} />
                        </div>
                    <div className=" px-5 flex justify-center items-center">
                        <Quotecard onData={data} />
                        <div className="flex flex-row " >
                            <Forecastcard onForecast={forecast} className="" />
                            <Weathercard onClientCoord={clientCoord} onData={data} className=""/>
                            <Historycard onHistory={history} onSetHistory={setHistory} onData={data} className="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
