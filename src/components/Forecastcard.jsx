const Forecastcard = ({ onForecast }) => {
    //*To hide component on initial render as onForecast is {} with no data yet to display
    if (!onForecast?.city) {
        return <div></div>;
    }

    const { list } = onForecast;
    // const { dt_txt, main, temp } = list

    //* to determine date in year/month/day format
    const getDate = () => {
        let yourDate = new Date();
        const offset = yourDate.getTimezoneOffset();
        yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
        return yourDate.toISOString().split("T")[0];
    };

    //* to increment the date in year/month/day format
    const incrementDate = (currDate, increment) => {
        const originalDate = new Date(currDate);
        originalDate.setDate(originalDate.getDate() + increment);
        const updatedDate = originalDate.toISOString().split("T")[0];
        return updatedDate;
    };

    //* to calculate and return avg temp from list for specified forecast date
    const calcDayForecastTemp = (list, currentDate) => {
        let dayAvgForecast = [];

        for (let i = 0; i < list.length; i++) {
            if (list[i].dt_txt.includes(currentDate)) {
                dayAvgForecast.push(list[i].main.temp);
            }
        }
        return (
            dayAvgForecast.reduce((acc, curr) => acc + curr, 0) /
            dayAvgForecast.length
        );
    };

    //* converts yyyy-mm-dd format to the day of the week
    const getDayofWeek = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: "long", timeZone: "UTC" };
        return date.toLocaleDateString("en-US", options);
    };

    const findMostCommonIcon = (list, currentDate) => {
        const icons = [];
        const iconCounts = {};
        let mostCommonIcon = "";
        let maxCount = 0;

        for (let i = 0; i < list.length; i++) {
            if (list[i].dt_txt.includes(currentDate)) {
                icons.push(list[i].weather[0].icon);
            }
        }
        
        for (const icon of icons) {
            iconCounts[icon] = (iconCounts[icon] || 0) + 1;
        }

        for (const [icon, count] of Object.entries(iconCounts)) {
            if (count > maxCount) {
                mostCommonIcon = icon;
                maxCount = count;
            }
        }
        return mostCommonIcon;
    }

    //* main function that calls the other functions to store an array of the calculated daily forecast temp
    const ForecastTemp = (list) => {
        let currDate = getDate();
        const arrForecastTemp = [];

        for (let j = 1; j <= 5; j++) {
            arrForecastTemp.push({
                forecastTemp: calcDayForecastTemp(
                    list,
                    incrementDate(currDate, j)
                ),
                forecastDay: getDayofWeek(incrementDate(currDate, j)),
                forecastIcon: findMostCommonIcon(list, incrementDate(currDate, j))
            });
        }
        return arrForecastTemp;
    };

    return (
        <div className="bg-[#000000d0] text-white p-8 rounded-[24px] w-full max-w-sm mx-4 ">
            <h2 className="mb-2">5 Day Forecast</h2>
            <ul className="max-h-80 overflow-y-auto mb-9">
                {ForecastTemp(list).map((item, index) => (
                    <div key={index} className="m-0 mb-[0.4em] flex justify-between">
                        {" "}
                        <div>
                            <li>{item.forecastDay}</li>
                            <li>{`${Math.round(item.forecastTemp)}°C`}</li>
                        </div>
                        <img
                        src={`https://openweathermap.org/img/wn/${item.forecastIcon}.png`}
                        alt="Weather Icon"
                        className="relative bottom-2"
                    />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Forecastcard;
