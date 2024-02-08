import locationCalc from "../utilities/locationCalc";

const Historycard = ({ onHistory, onSetHistory, onData, onClientCoord }) => {
    //*To hide component on initial render as onData is {} with no data yet to display
    if (!onData?.name) {
        return <div></div>;
    }

    const { clientLat, clientLong } = onClientCoord;

    const onClear = () => {
        onSetHistory([]);
    };

    const numberFormatter = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    const onTempFilter = () => {
        const tempData = [...onHistory];
        tempData.sort((temp1, temp2) =>
            temp1.main.temp < temp2.main.temp
                ? 1
                : temp1.main.temp > temp2.main.temp
                ? -1
                : 0
        );
        onSetHistory(tempData);
    };

    const onDistFilter = () => {
        const distData = [...onHistory];
        distData.sort((dist1, dist2) =>
            locationCalc(
                clientLat,
                clientLong,
                dist1.coord.lat,
                dist1.coord.lon
            ) <
            locationCalc(
                clientLat,
                clientLong,
                dist2.coord.lat,
                dist2.coord.lon
            )
                ? 1
                : locationCalc(
                      clientLat,
                      clientLong,
                      dist1.coord.lat,
                      dist1.coord.lon
                  ) >
                  locationCalc(
                      clientLat,
                      clientLong,
                      dist2.coord.lat,
                      dist2.coord.lon
                  )
                ? -1
                : 0
        );
        onSetHistory(distData);
    };

    return (
        <>
            <div className=" bg-[#000000d0] text-white p-8 rounded-[24px] w-full max-w-sm mx-4 flex flex-col relative max-w-80">
                <h2 className="mb-2">Weather Log</h2>
                <div>
                    <ul className="max-h-80 overflow-y-auto mb-9">
                        {onHistory.map((item, index) => (
                            <div className="flex justify-between" key={index}>
                                {" "}
                                <li>
                                    {" "}
                                    {item.name} {Math.round(item.main.temp)}°C{" "}
                                </li>{" "}
                                <div>
                                    {numberFormatter.format(
                                        locationCalc(
                                            clientLat,
                                            clientLong,
                                            item.coord.lat,
                                            item.coord.lon
                                        )
                                    )}{" "}
                                    km
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-evenly absolute bottom-4 right-0 w-full">
                    <button
                        className=" mt-1 bg-blue-500 text-white px-4 py-2 rounded-lg w-[68px]"
                        onClick={onClear}
                    >
                        Clear
                    </button>
                    <button
                        className=" mt-1 bg-blue-500 text-white px-4 py-2 rounded-lg w-[68px]"
                        onClick={onTempFilter}
                    >
                        Temp
                    </button>
                    <button
                        className=" mt-1 bg-blue-500 text-white px-4 py-2 rounded-lg w-[68px]"
                        onClick={onDistFilter}
                    >
                        Dist
                    </button>
                </div>
            </div>
        </>
    );
};

export default Historycard;
