const Historycard = ({ onHistory, onSetHistory, onData }) => {
    //*To hide component on initial render as onData is {} with no data yet to display
    if (!onData?.name) {
        return <div></div>;
    }

    const onClear = () => {
        onSetHistory([]);
    };

    const onTempFilter = () => {
        const tempData = [...onHistory];
        console.log(tempData);
        tempData.sort((temp1, temp2) =>
            temp1.main.temp < temp2.main.temp
                ? 1
                : temp1.main.temp > temp2.main.temp
                ? -1
                : 0
        );
        onSetHistory(tempData);
    };

    return (
        <>
            <div className=" bg-[#000000d0] text-white p-8 rounded-[24px] w-full max-w-sm mx-4 flex flex-col relative">
                <h2 className="mb-2">Weather Log</h2>
                <div>
                    <ul className="max-h-80 overflow-y-auto mb-9">
                        {onHistory.map((item) => (
                            <div className="" key={item.id}>
                                {" "}
                                <li>
                                    {" "}
                                    {item.name} {Math.round(item.main.temp)}°C{" "}
                                </li>{" "}
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
                    <button className=" mt-1 bg-blue-500 text-white px-4 py-2 rounded-lg w-[68px]">
                        Dist
                    </button>
                </div>
            </div>
        </>
    );
};

export default Historycard;
