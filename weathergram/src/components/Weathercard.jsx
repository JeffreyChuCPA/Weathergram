const Weathercard = () => {
    return (
        <div className="bg-[#000000d0] text-white p-8 rounded-[24px] w-full max-w-md mx-4">
            <div className="">
                <h2>Weather in Denver</h2>
                <h1 className="m-0 mb-[0.4em]">51°C</h1>
                <div className="">
                    <img
                        src="https://openweathermap.org/img/wn/04n.png"
                        alt=""
                        className=""
                    />
                    <div>Cloudy</div>
                </div>
                <div>Humidity: 60%</div>
                <div>Wind speed: 6.2 km/h</div>
            </div>
        </div>
    );
};

export default Weathercard;
