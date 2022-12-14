import CityWeatherComponent from "./cityWeatherComponent";
import { useSelector } from "react-redux";
import { selectCityInfos } from "../../features/weather/weatherSlice";


const CitiesMenuComponent = () => {
    const city = useSelector(selectCityInfos)
    return (
        <div className="flex flex-col space-y-5 py-5 md:py-0">
            <div className="flex space-x-2 items-center">
                <button className="w-8 h-8 border-2 border-blue-900 text-xl text-blue-900 font-bold rounded-lg hover:bg-slate-300">+</button>
                <input className="bg-transparent border-blue-900 focus:border-blue-900 w-full h-10 border-[1px] rounded-full text-lg p-2 text-blue-900" placeholder="Inserisci Città" />
            </div>
            {
                city.map(location => {
                    return(
                        <CityWeatherComponent name={location.name} key={location.name}/>
                    )
                })
            }
        </div>

    );
}

export default CitiesMenuComponent;