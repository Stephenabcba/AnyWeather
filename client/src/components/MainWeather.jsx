import { Switch, Route, useHistory, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LocationPicker from './LocationPicker';
import DisplayWeather from './DisplayWeather';
import axios from 'axios'
import GoogleMapsWrapper from './GoogleMapsWrapper';

const MainWeather = (props) => {
    const [curWeather, setCurWeather] = useState(-1)
    const [weatherType, setWeatherType] = useState("")
    const [curCity, setCurCity] = useState("San Francisco")

    const history = useHistory()

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log("User granted location. Location:", position.coords.latitude, position.coords.longitude);
                getLocationWeather(position.coords.latitude, position.coords.longitude)
            }, (err) => {
                console.log(err.message);
                console.log("Fetching default location of San Francisco");
                let initialLat = 37.7749
                let initialLon = -122.4194
                getLocationWeather(initialLat, initialLon)
            })
        }
    }, [])

    const getLocationWeather = (lat, lon, e) => {
        const OW_API_KEY = process.env.REACT_APP_OW_API_KEY

        console.log("Getting weather data for: Lat:", lat, " Lon: ", lon);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OW_API_KEY}`)
            .then(res => {
                console.log("City Name:", res.data.name);
                console.log("Weather Id:", res.data.weather[0].id);
                let weatherCode = 100
                const weatherId = res.data.weather[0].id
                if ((weatherId >= 300 && weatherId < 400) || (weatherId >= 500 && weatherId < 600)) {
                    weatherCode = 0
                } else if (weatherId === 800) {
                    weatherCode = 1
                } else if (weatherId >= 600 && weatherId < 700) {
                    weatherCode = 2
                } else if (weatherId >= 200 && weatherId < 300) {
                    weatherCode = 3
                } else if (weatherId >= 801 && weatherId < 900) {
                    weatherCode = 4
                }

                setCurWeather(weatherCode)
                setCurCity(res.data.name)
                setWeatherType(res.data.weather[0].main)

                const popup = document.getElementById("popup")
                if (popup) {
                    popup.classList.remove("show")
                }
                history.push("/")
            })
            .catch(err => {
                console.log(err)
                if (e) {
                    e.target.classList.add("cityProblem")
                }
            })
    }

    const mockLocationWeather = (cityName, weatherCode, weatherDescription) => {
        setCurWeather(weatherCode)
        setCurCity(cityName)
        setWeatherType(weatherDescription)
        const popup = document.getElementById("popup")
        if (popup) {
            popup.classList.remove("show")
        }
    }

    return (
        <div id="mainWeather" className={props.showWeather ? "" : "hide"}>
            <Switch>
                <Route path='/locations'>
                    <LocationPicker getLocationWeather={getLocationWeather} mockLocationWeather={mockLocationWeather} />
                </Route>
                <Route path='/map'>
                    <div className='centerItems'>
                        <div className="mapContainer bg-white">
                            <GoogleMapsWrapper getLocationWeather={getLocationWeather} />
                            <h2>Click anywhere on the map to see the weather at that location.</h2>
                            <p>Prefer to see a list of cities instead? <Link to='/locations'>Click here</Link></p>
                        </div>
                    </div>
                </Route>
            </Switch>

            {(curWeather >= 0) ?
                <DisplayWeather curWeather={curWeather} curCity={curCity} weatherType={weatherType} />
                : ''
            }
        </div>
    );
}

export default MainWeather