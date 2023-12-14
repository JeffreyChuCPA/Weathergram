import Quotecard from "./components/Quotecard";
import Searchbar from "./components/Searchbar";
import Weathercard from "./components/Weathercard";
import { useState } from "react";

function App() {

    const [data, setData] = useState({});
    console.log(data)

    return (
        <>
            <div className=" px-5 flex flex-col justify-center items-center h-screen m-0 bg-[url('https://source.unsplash.com/1669x931/?landscape')] bg-cover">
                <Searchbar onLocation={setData} />
                <Quotecard onData={data}/>
                <Weathercard onData={data}/>
            </div>
        </>
    );
}

export default App;
