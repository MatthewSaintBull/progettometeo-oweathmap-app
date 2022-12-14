import { createSlice } from "@reduxjs/toolkit";
import moment from "moment/moment";

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        sideCities: [],
        mainCity: ""
    },
    reducers: {
        addCity: (state, action) => {
            state[action.payload.renderLocation] = state[action.payload.renderLocation] ? [...state[action.payload.renderLocation], action.payload.cityBody] : action.payload.cityBody
        },
    }
})

export const { addCity } = weatherSlice.actions

export const addCityWeather = (cityId, renderLocation) => (dispatch) => {
    const count = 4
    const getTimefromTimezone = (timezone) => {
        const utc = moment().utc()
        const cityTime = moment(utc).add(timezone, 'seconds')
        return moment(cityTime).format('LT')
    }
    const getTempsfromList = (tempsList) => {
        const tempsArray = tempsList.map(
            temperature => {
                return {
                    temp: Math.floor(temperature.main.temp),
                    hour: moment(temperature.dt_txt).format("hA")
                }
            }
        )
        return tempsArray
    }
    fetch(`${process.env.REACT_APP_APIURL}${cityId}&units=metric&cnt=${count}&appid=${process.env.REACT_APP_APIKEY}`).then(response => response.json()).then(
        data => {
            dispatch(addCity({
                cityBody: { name: data.city.name, temperature: getTempsfromList(data.list), time: getTimefromTimezone(data.city.timezone), weather: data.list[0].weather[0].main, date: moment().format('dddd DD, MMM') },
                renderLocation
            }))
        }
    )
}

export const selectCityInfos = (state) => {
    return state.weather.sideCities
}

export const selectSideCityByName = cityName => (state) => {
    const cityInfos = state.weather.sideCities.find(city => {
        if (city.name === cityName) {
            return city
        }
        return null
    }) || undefined
    return cityInfos
}

export const selectMainCity = (state) => {
    return state.weather.mainCity
}

export default weatherSlice.reducer