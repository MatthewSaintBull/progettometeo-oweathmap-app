import WeatherIcon from "../../icons/weatherIcon";

const CityWeatherComponent = () => {
    return (
        <div className="bg-blue-900 rounded-lg w-full h-full lg:grid lg:grid-cols-6 p-2 text-white flex flex-col shadow-lg">
            <div className="flex flex-col overflow-hidden lg:col-span-3">
                <span className="text-5xl font-semibold">London</span>
                <span className="font-semibold text-lg">Friday 18, September</span>
                <span className="font-extralight text-lg">2.38 pm</span>
            </div>
            <div className="lg:col-span-3 flex justify-center px-10">
                <WeatherIcon />
                <h3 className="items-center text-6xl font-semibold">18°</h3>
            </div>
        </div>
    );
}

export default CityWeatherComponent;