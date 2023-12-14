const Weathercard = ({ onData }) => {
    //Todo: how to render and mount this component if onData is initially {}
    //* why does onData == {} not work for conditional rendering? Is an empty {} actually being passed to this componenet?
    //*Am i not allowed to define destructured variables from objects that are empty?
    //*I have to destrucutre props when passing between child and parent, why?
    
    if (!onData?.name) {
        return <div></div>
    }

    const { name } = onData;
    const { icon, description } = onData.weather[0];
    const { temp, humidity } = onData.main;
    const { speed } = onData.wind;
    console.log(name, icon, description, temp, humidity, speed);

    

    return (
        <div className="bg-[#000000d0] text-white p-8 rounded-[24px] w-full max-w-md mx-4">
            <div className="">
                <h2>{`Weather in ${name}`}</h2>
                <h1 className="m-0 mb-[0.4em]">{`${Math.round(temp)}°C`}</h1>
                <div className="">
                    <img
                        src={`https://openweathermap.org/img/wn/${icon}.png`}
                        alt=""
                        className=""
                    />
                    <div>{description}</div>
                </div>
                <div>{`Humidity: ${humidity}%`}</div>
                <div>{`Wind speed: ${speed} km/h`}</div>
            </div>
        </div>
    );
};

export default Weathercard;
