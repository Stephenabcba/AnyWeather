import React from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import Map from './Map';

const GoogleMapsWrapper = (props) => {

    const render = (status) => {
        return <h1>{status}</h1>
    }

    const onClick = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        console.log("Lat Lng from Google Maps Click: ", lat, lng);
        props.getLocationWeather(lat, lng)
    }

    const onSearch = (lat, lng) => {
        console.log("Lat Lng from Google Maps Search: ", lat, lng);
        props.getLocationWeather(lat, lng)
    }




    return (
        <Wrapper apiKey={process.env.REACT_APP_GOOGLEMAPSKEY} render={render}>
            <Map onClick={onClick} onSearch={onSearch} />
        </Wrapper>
    )
}

export default GoogleMapsWrapper