import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';


const LocationPicker = (props) => {
    const history = useHistory()

    const locations = [
        { name: "San Francisco", weather: 0, lat: 37.7749, lon: -122.4194 },
        { name: "Sunnyvale", weather: 1, lat: 37.3688, lon: -122.0363 },
        { name: "Los Angeles", weather: 1, lat: 34.0522, lon: -118.2437 },
        { name: "Seattle", weather: 1, lat: 47.6062, lon: -122.3321 },
        { name: "Portland", weather: 0, lat: 45.5152, lon: -122.6784 },
        { name: "Boise", weather: 1, lat: 43.6150, lon: -116.2023 },
        { name: "Phoenix", weather: 1, lat: 33.4484, lon: -112.0740 },
        { name: "Orlando", weather: 0, lat: 28.5384, lon: -81.3789 },
        { name: "Miami", weather: 1, lat: 25.7617, lon: -80.1918 },
        { name: "New York City", weather: 2, lat: 40.7128, lon: -74.0060 },
        { name: "Las Vegas", weather: 1, lat: 36.1699, lon: -115.1398 },
        { name: "Chicago", weather: 1, lat: 41.8781, lon: -87.6298 },
        { name: "Houston", weather: 0, lat: 29.7604, lon: -95.3698 },
        { name: "Honolulu", weather: 1, lat: 21.3069, lon: -157.8583 },
        { name: "Invalid City", weather: 2, lat: 350000, lon: -100000 },
    ]

    const mockLocations = [
        { name: "Raining City", weather: 0, description: "Rainy Fake City" },
        { name: "Sunny City", weather: 1, description: "Sunny Fake City" },
        { name: "Snowing City", weather: 2, description: "Snowing Fake City" },
        { name: "Thundering City", weather: 3, description: "Thundering Fake City" },
        { name: "Cloudy City", weather: 4, description: "Cloudy Fake City" },
    ]

    useEffect(() => {
        const popup = document.getElementById("popup")
        popup.classList.add("show")
    }, [])


    const handleClick = (e, location) => {
        const { lat, lon } = location
        props.getLocationWeather(lat, lon, e)
    }

    const mockWeather = (location) => {
        props.mockLocationWeather(location.name, location.weather, location.description)
        history.push("/")
    }

    return (
        <div className="hoverDisplay">
            <div id="popup">
                <h1>Pick a Location:</h1>
                <div id="locationsList">
                    {locations.map((location, idx) => {
                        return <button key={idx} className="locationBtn btn-bg-blue" onClick={(e) => handleClick(e, location)}>{location.name}</button>
                    })}
                    {mockLocations.map((location, idx) => {
                        return <button key={idx} className="locationBtn btn-bg-blue" onClick={(e) => mockWeather(location)}>{location.name}</button>
                    })}
                    <button className="locationBtn btn-bg-gray" onClick={() => history.push("/")}>Cancel</button>
                </div>
                <p>Prefer to use a map or search instead? <Link to="/map">Click here</Link> </p>
            </div>
        </div>
    )
}

export default LocationPicker