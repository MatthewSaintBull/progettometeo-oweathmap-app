import CitiesMenuComponent from './components/citiesMenu/citiesMenuComponent';
import SummaryComponent from './components/summaryComponent'
import WeatherIcon from './icons/weatherIcon';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addCityWeather } from './features/weather/weatherSlice';
import { selectMainCity } from './features/weather/weatherSlice';
import ThermometerComponent from './components/thermometerComponent';
import MultiTabInfoComponent from './components/multiTabInfo/multiTabInfoComponent';

function App() {
  const mainCity = useSelector(selectMainCity)
  const dispatch = useDispatch()
  useEffect(() => {
    const sideCities = ["2643743", "3169070"]
    const mainCity = "3165524"
    sideCities.forEach(sideCity => {
      dispatch(addCityWeather(sideCity, "sideCities"))
    })
    dispatch(addCityWeather(mainCity, "mainCity"))
  }, [dispatch])

  return (
    <div className="mx-auto max-w-6xl h-screen bg-slate-100 md:p-16 relative p-4">
      <div className='flex flex-col md:flex-row md:space-x-4 justify-center md:gap-20'>
        <div className='flex flex-col-reverse md:flex-col'>
          <SummaryComponent />
          <div className='w-32 md:absolute flex md:flex-col rounded-r-xl overflow-hidden bg-blue-300 z-50 -ml-4 md:ml-0 shadow-xl inset-x-0 md:h-24 md:my-36 my-5 h-16 items-center justify-center'>
            {
              mainCity.temperature ? <span className='text-5xl font-bold text-white'>{mainCity.temperature[0].temp}°</span>
                : null
            }
            <span className='text-2xl text-white'><WeatherIcon /></span>
          </div>
        </div>
        <div className='h-full md:h-96 md:overflow-y-auto'>
          <CitiesMenuComponent />
        </div>
      </div>
      <div className='flex justify-center flex-wrap md:flex-nowrap md:space-x-5'>
        <ThermometerComponent />
        <MultiTabInfoComponent />
      </div>
    </div>
  );
}

export default App;
