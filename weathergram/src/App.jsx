import Searchbar from "./components/Searchbar";
import Weathercard from "./components/Weathercard";

function App() {

    

    return (
        <>
            <div className=" px-5 flex flex-col justify-center items-center h-screen m-0 bg-[url('https://source.unsplash.com/1669x931/?landscape')] bg-cover">
                <Searchbar />
                <Weathercard />
            </div>
        </>
    );
}

export default App;
