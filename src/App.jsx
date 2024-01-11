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
            <div className="bg-[url('https://source.unsplash.com/1669x931/?landscape')] bg-cover flex flex-col h-screen justify-center">
                <div className="flex flex-col">
                        <div className="px-5 flex justify-center">
                            <Searchbar onSetData={setData} onSetHistory={setHistory} onHistory={history} />
                        </div>
                    <div className=" px-5 flex justify-center items-center">
                        <Quotecard onData={data} />
                        <div className="flex flex-row " >
                            <Weathercard onData={data} className=""/>
                            <Historycard onHistory={history} onSetHistory={setHistory} onData={data} className="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
