import { useSelector } from "react-redux";
import { selectMainCity } from "../features/weather/weatherSlice";

const CelsiusShowComponent = ({ size, temperature }) => (
    <div className="flex flex-col items-center relative">
        <div className="flex items-center">
            <div className={`rounded-full bg-white w-${size} h-${size}`} />
            {temperature ? (
                <>
                    <p className="absolute -inset-x-10 text-4xl font-bold text-white">{temperature.temp}°</p>
                    <p className="absolute inset-x-12 text-xl font-extralight text-white" >{temperature.hour}</p>
                </>) : null}
        </div>
        <div className="flex justify-start">
            <div className="w-2 bg-white h-10" />
        </div>
    </div>
)

const ThermometerComponent = () => {
    const city = useSelector(selectMainCity)
    return (
        <div className="flex flex-col w-full md:w-1/4 mt-4 space-y-2">
            <p className="text-3xl font-semibold text-blue-900 self-center">Today</p>
            <div className="rounded-lg bg-gradient-to-b from-blue-400 to-blue-100 flex flex-col items-center overflow-y-hidden h-56 shadow-lg pt-2">
                {
                    city.temperature?.map((temperature, idx) => {
                        if (idx === 0)
                            return <CelsiusShowComponent size='10' temperature={temperature} key={idx} />
                        return <CelsiusShowComponent size='6' temperature={temperature} key={idx} />
                    })
                }
            </div></div>
    );
}

export default ThermometerComponent;