import Quotecard from "./components/Quotecard";
import Searchbar from "./components/Searchbar";
import Weathercard from "./components/Weathercard";
import Historycard from "./components/Historycard";
import { useState } from "react";

function App() {
    const [data, setData] = useState({});
    const [history, setHistory] = useState([])
    console.log(data);
    console.log(history);

    return (
        <>
            <div className=" px-5 flex flex-col justify-center items-center h-screen m-0 bg-[url('https://source.unsplash.com/1669x931/?landscape')] bg-cover">
                <Searchbar onSetData={setData} onSetHistory={setHistory} onHistory={history} />
                <Quotecard onData={data} />
                <div className="flex flex-row" >
                    <Weathercard onData={data} />
                    <Historycard onHistory={history} onSetHistory={setHistory} onData={data} />
                </div>
            </div>
        </>
    );
}

export default App;
