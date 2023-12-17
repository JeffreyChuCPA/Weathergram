const Historycard = ({onHistory, onSetHistory, onData}) => {

    //*To hide component on initial render as onData is {} with no data yet to display
    if (!onData?.name) {
        return <div></div>
    }

    const onClear = () => {
        onSetHistory([])
    }

    return (
        <div className=" bg-[#000000d0] text-white p-8 rounded-[24px] w-full max-w-sm mx-4">
            <h2 className="mb-1">Weather log</h2>
            <ul>
                {onHistory.map(item => <div key={item.id} > <li> {item.name} {Math.round(item.main.temp)}°C </li> </div>)}
            </ul>
            <button className="" onClick={onClear}>Clear</button>
        </div>
    );
};

export default Historycard;
