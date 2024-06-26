import locationCalc from "../utilities/locationCalc";

const Weathercard = ({ onData, onClientCoord }) => {
    //*To hide component on initial render as onData is {} with no data yet to display
    if (!onData?.name) {
        return null;
    }

    const { name } = onData;
    const { icon, description } = onData.weather[0];
    const { temp, humidity } = onData.main;
    const { speed } = onData.wind;
    const { lat, lon } = onData.coord;
    const { clientLat, clientLong } = onClientCoord;


    const numberFormatter = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    return (
        <div className="bg-[#000000d0] text-white p-8 rounded-[24px] w-full  max-w-sm mx-4 ">
            <div className="">
                <h2>{`Weather in ${name}`}</h2>
                <h1 className="m-0 mb-[0.4em]">{`${Math.round(temp)}°C`}</h1>
                <div className="">
                    <img
                        src={`https://openweathermap.org/img/wn/${icon}.png`}
                        alt="Weather Icon"
                        className="relative -left-2"
                    />
                    <div>{description}</div>
                </div>
                <div>{`Humidity: ${humidity}%`}</div>
                <div>{`Wind speed: ${speed} km/h`}</div>
                <div>{`Distance: ${numberFormatter.format(
                    locationCalc(clientLat, clientLong, lat, lon)
                )} km`}</div>
            </div>
        </div>
    );
};

export default Weathercard;