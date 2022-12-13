import CitiesMenuComponent from './components/citiesMenu/citiesMenuComponent';
import SummaryComponent from './components/summaryComponent'
import WeatherIcon from './icons/weatherIcon';

function App() {
  return (
    <div className="mx-auto max-w-7xl bg-white p-16 relative">
      <div className='md:grid md:grid-cols-5 md:space-x-4'>
        <div className='md:col-span-3'>
          <div className='w-32 absolute flex flex-col rounded-r-xl overflow-hidden bg-blue-300 z-50 shadow-xl inset-x-0 md:inset-y-1/4 inset-y-0 md:h-1/2 h-1/4 items-center justify-center py-5'>
            <span className='text-5xl font-bold text-white'>22°</span>
            <span className='text-2xl text-white'><WeatherIcon /></span>
          </div>
          <SummaryComponent />
        </div>
        <div className='md:col-span-2'>
          <CitiesMenuComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
