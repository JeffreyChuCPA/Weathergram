import urls from "../utilities/urls";
import apiKeys from "../utilities/api-keys";
import { useState } from "react";
import axios, { CanceledError } from "axios";

const Searchbar = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");

    const url =
        urls.weatherURL +
        location +
        "&units=metric&appid=" +
        apiKeys.weatherAPIKey;

    //*function to retrieve API data from user input
    const searchLocation = () => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
            });
        setLocation("");
    };

    //*function to handle "Enter" press from user for searching
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            searchLocation();
        }
    };

    return (
        <div className="flex items-center justify-center bg-[#000000d0] p-5 rounded-[24px] w-full max-w-md mx-4 my-2 ">
            <input
                type="text"
                value={location}
                onKeyDown={(event) => handleKeyDown(event)}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Search City"
                className="border-none outline-none px-[0.4em] py-[1em] rounded-[24px] bg-[#7c7c7c2b] text-white font-[inherit] text-[17px] w-[calc(100%-70px)]"
            />
            <button
                onClick={searchLocation}
                className=" mx-[0.5rem] rounded-[50%] border-none w-[60px] h-[60px] outline-none bg-[#7c7c7c2b] text-white ease-in-out duration-300 hover:bg-[#7c7c7c6b]"
            >
                <svg
                    className="m-auto"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1.7em"
                    width="1.7em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                </svg>
            </button>
        </div>
    );
};

export default Searchbar;
