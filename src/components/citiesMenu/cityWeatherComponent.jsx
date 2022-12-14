import WeatherIcon from "../../icons/weatherIcon";
import { selectSideCityByName } from "../../features/weather/weatherSlice";
import { useSelector } from "react-redux";

const CityWeatherComponent = (props) => {
    const { name } = props
    const city = useSelector(selectSideCityByName(name))
    return (
        <div className="bg-blue-900 rounded-lg w-full h-full lg:grid lg:grid-cols-6 p-2 text-white flex flex-col shadow-lg">
            <div className="flex flex-col overflow-hidden lg:col-span-3">
                <span className="text-5xl font-semibold">{city.name}</span>
                <span className="font-semibold text-lg">{city.date}</span>
                <span className="font-extralight text-lg">{city.time}</span>
            </div>
            <div className="lg:col-span-3 flex justify-center px-10">
                <WeatherIcon />
                <h3 className="items-center text-6xl font-semibold">{city.temperature[0].temp}°</h3>
            </div>
        </div>
    );
}

export default CityWeatherComponent;