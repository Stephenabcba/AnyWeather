import React, { useRef, useState, useEffect } from 'react'


const Map = ({
    onClick,
    onSearch
}) => {

    const ref = useRef(null)
    const [map, setMap] = useState()
    const style = { display: "flex", height: "50vh" }
    let geocoder = new window.google.maps.Geocoder();


    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}))
        }

    }, [ref, map])

    useEffect(() => {
        if (map) {
            if (onClick) {
                map.addListener("click", onClick);
            }

            map.setOptions({
                zoom: 14,
                center: { lat: 33.806145, lng: -117.9209 },
                mapTypeControl: false,
                streetViewControl: false
            })

            const inputText = document.createElement("input");

            inputText.type = "text";
            inputText.placeholder = "Enter a location";
            inputText.classList.add("mapSearchInput");


            const submitButton = document.createElement("input");

            submitButton.type = "button";
            submitButton.value = "Geocode";
            submitButton.classList.add("mapSearchButton");

            map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputText);
            map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(submitButton);
            submitButton.addEventListener("click", () => {
                geocoder
                    .geocode({ address: inputText.value })
                    .then((result) => {
                        const { results } = result;
                        console.log(results);
                        const location = results[0].geometry.location
                        // console.log(location.lat(), location.lng());
                        onSearch(location.lat(), location.lng())
                    })
                    .catch((e) => {
                        alert("Geocode was not successful for the following reason: " + e);
                    });
            }
            );

        }
    }, [map, onClick]);

    return (
        <div ref={ref} style={style}></div>
    )
}

export default Map