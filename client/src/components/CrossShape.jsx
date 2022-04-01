import React, { useRef, useEffect } from 'react'
import mojs from "@mojs/core";


const CrossShape = (props) => {
    const cross = useRef()
    const crossContainer = useRef()

    useEffect(() => {
        cross.current = new mojs.Shape({
            parent: crossContainer.current,
            shape: 'cross',
            points: 100,
            scale: 1,
            // top: 0,
            rotate: { 45: 315 },
            stroke: 'black',
            radius: 25,
            radiusX: 25,
            strokeWidth: 20,
            duration: 1000,
        })

        // cross.current.el.zIndex = 100

        cross.current.then({
            duration: 600,
            scale: 100,
            // opacity: 0.8,
            easing: "ease.in",
            onComplete() {
                console.log("test")
                props.loadPage(true)
            }
        }).then({
            duration: 1000,
            opacity: 0,
            easing: "ease.out",
        }).play()
    }, [])

    return (
        <div ref={crossContainer} style={{ position: "fixed", width: "100vw", height: "100vh", overflow: "hidden" }}></div>
    )
}

export default CrossShape