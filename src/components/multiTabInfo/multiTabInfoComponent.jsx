import { useState } from "react";
import WeatherIcon from "../../icons/weatherIcon";

// Since I didn't have a lot of time (I'm sorry about this, hope you all understand) to complete the challenge, this component is completely mocked.
// a step to make this component usable, would be of course to get the infos from the openweathermap apis, like I did in the other components and to render the Tab1Component with as much days
// needed using a map, iterating the Temperature state in redux.
 

const Tab1Component = () => (

    <div className="flex justify-evenly h-full">
        <div className="w-20 md:w-40 bg-blue-500 h-full rounded-2xl shadow-2xl bg-opacity-50 text-white text-center">
            <h5 className="text-xl font-bold">Day 1</h5>
            <span className="text-xl font-light">18°</span>
            <WeatherIcon size={20}/>
        </div>
        <div className="w-20 md:w-40 bg-blue-500 h-full rounded-2xl shadow-2xl bg-opacity-50 text-white text-center">
            <h5 className="text-xl font-bold">Day 2</h5>
            <span className="text-xl font-light">12°</span>
            <WeatherIcon size={20}/>
        </div>
        <div className="w-20 md:w-40 bg-blue-500 h-full rounded-2xl shadow-2xl bg-opacity-50 text-white text-center">
            <h5 className="text-xl font-bold">Day 3</h5>
            <span className="text-xl font-light">24°</span>
            <WeatherIcon size={20}/>
        </div>
    </div>

)

const Tab2Component = () => (
    <div className="w-full bg-gradient-to-br from-blue-400 to-blue-200 bg-opacity-70 h-full rounded-2xl shadow-2xl text-white md:grid md:grid-cols-2">
        <div className="md:grid-span-1 md:flex md:flex-col  text-white text-3xl text-center justify-evenly hidden">
            <span>Wed 14, Dec</span>
            <WeatherIcon size={20}/>
        </div>
        <div className="flex flex-col justify-evenly text-white text-center space-y-2 py-5">
            <span className="text-3xl font-bold">18°</span>
            <span className="text-xl font-semibold">strong wind</span>
            <span className="text-xl font-thin">The high will be <span className="font-semibold">14°C</span>, the low will be <span className="font-semibold">8°C</span>.</span>
            <span className="text-xl font-thin">Humidity: <span className="font-semibold">55%</span></span>
            <span className="text-xl font-thin">UV: <span className="font-semibold">3</span></span>
            <span className="text-xl font-thin">Dew Point: <span className="font-semibold">3°C</span></span>
        </div>
    </div >
)

const MultiTabInfoComponent = () => {
    const [tabOpened, setTabOpened] = useState(1)
    return (
        <div className="flex flex-col w-full mt-4">
            <div className="flex ">
                <button onClick={() => { setTabOpened(1) }} className={`h-20 w-40 bg-${tabOpened === 1 ? "blue-300" : "white"} rounded-t-xl shadow-2xl z-50 shadow-slate-700 text-${tabOpened === 1 ? "white" : "blue-900"} text-center text-2xl font-bold `}>
                    This Week
                </button>
                <button onClick={() => { setTabOpened(2) }} className={`h-20 w-40 bg-${tabOpened === 2 ? "blue-300" : "white"} rounded-t-xl shadow-2xl z-50 shadow-slate-700 text-${tabOpened === 2 ? "white" : "blue-900"} text-center text-2xl font-bold`}>
                    This Month
                </button>
            </div>
            <div className="h-full bg-blue-300 rounded-xl rounded-tl-none p-5 z-50">
                {
                    tabOpened === 1 ? <Tab1Component /> : <Tab2Component />
                }
            </div>

        </div>
    );
}

export default MultiTabInfoComponent;