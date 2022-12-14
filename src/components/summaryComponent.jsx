import { selectMainCity } from "../features/weather/weatherSlice";
import { useSelector } from "react-redux";

const SummaryComponent = () => {
    const city = useSelector(selectMainCity)
    return (
        <div className="flex flex-col rounded-3xl text-blue-900 bg-sky-200 md:px-36 md:py-20 p-5 w-full md:h-96 shadow-lg">
            <h3 className=" text-5xl font-semibold">{city.name}</h3>
            <h5 className="font-semibold text-xl">{city.date}</h5>
            <span className="font-extralight text-xl">{city.weather}</span>
        </div>
    );
}

export default SummaryComponent;