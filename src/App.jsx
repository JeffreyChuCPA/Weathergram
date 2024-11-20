import Quotecard from "./components/Quotecard";
import Searchbar from "./components/Searchbar";
import Weathercard from "./components/Weathercard";
import Historycard from "./components/Historycard";
import Forecastcard from "./components/Forecastcard";
import { useEffect, useState } from "react";
import { rainAnimation } from "./utilities/rainAnimation";
import "./styles/rainStyles.css";
import "./styles/snowStyles.css";
import Snowcanvas from "./components/Snowcanvas";
import background from './assets/background.jpg'
import icon from './assets/github-icon.png'

function App() {
    const [data, setData] = useState({});
    const [history, setHistory] = useState([]);
    const [forecast, setForecast] = useState({});
    const [clientCoord, setClientCoord] = useState({});
    const [isRainy, setIsRainy] = useState(false);
    const [isSnowy, setIsSnowy] = useState(false);
    const [backgroundImg, setBackgroundImg] = useState(background)


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => setClientCoord({clientLat: position.coords.latitude, clientLong: position.coords.longitude}))
        // snowAnimation(isSnowy)
    }, [setClientCoord, isSnowy])

    useEffect(() => {
        const apiKey = import.meta.env.VITE_UNSPLASHAPIKEY
        const fetchBackgroundImg = async () => {
            const locationSearch = data.name
            try {
                const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}&query=${locationSearch}&orientation=landscape&count=1`)
                const data = await response.json()
                const retrievedImg = data[0].urls.full
                setBackgroundImg(retrievedImg)
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchBackgroundImg()
    }, [data])

    rainAnimation(isRainy)
    
    

    return (
        <>
            <Snowcanvas onSnowy={isSnowy} />
            <a
                href="https://github.com/JeffreyChuCPA/Weathergram"
                className="fixed top-4 right-4 px-4 py-2 w-20"
            >
                <img src={icon} alt="github icon"/>
            </a>
            <div className="bg-cover bg-no-repeat bg-center flex flex-col h-screen justify-center w-full overflow-y-auto" style={{ backgroundImage: `url(${backgroundImg})` }}>
                    <div className="flex flex-col">
                            <div className="mt-80 sm:mt-0 sm:px-5 flex justify-center mx-4 ">
                                <Searchbar onSetSnowy={setIsSnowy} onSetRainy={setIsRainy} onSetForecast={setForecast} onSetData={setData} onSetHistory={setHistory} onHistory={history} />
                            </div>
                        <div className="flex justify-center items-center mt-3 mx-4">
                            <Quotecard onData={data} />
                            <div className="flex flex-col gap-2 items-center sm:flex-row sm:gap-0 sm:items-stretch " >
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
