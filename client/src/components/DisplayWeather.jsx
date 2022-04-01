import React from 'react'
import Rain from './Rain';
import Sun from './Sun';
import Snow from './Snow';
import { Route, Link } from 'react-router-dom';
import Thunder from './Thunder';
import Cloud from './Cloud';


const DisplayWeather = ({ curWeather, curCity, weatherType }) => {
    const weatherStatus = [
        "raining",
        "sunny",
        "snowing",
        "thunder storming",
        "cloudy (not animated)"
    ]

    const switchWeather = () => {
        switch (curWeather) {
            case 0:
                return <Rain />
            case 1:
                return <Sun />
            case 2:
                return <Snow />
            case 3:
                return (
                    <>
                        <Rain />
                        <Thunder />
                    </>
                )
            case 4:
                return <Cloud />
            case 100:
                return <Sun />
            default:
                return <></>
        }
    }
    return <>
        {switchWeather()}
        <Route exact path="/">
            <div className="weatherInfo">
                <div>
                    {curWeather < 10 ?
                        <h1 className='whiteText gray-bg'>It is currently {weatherStatus[curWeather]} in {curCity}</h1>
                        : <>
                            <h1>{curCity}</h1>
                            <h2>This weather condition is currently not supported.</h2>
                            <p>The weather condition is: {weatherType}</p>
                        </>
                    }
                    <div>
                        <Link to='locations' className="whiteText">Change Location</Link>
                    </div>
                </div>
            </div>
        </Route>
    </>
}

export default DisplayWeather