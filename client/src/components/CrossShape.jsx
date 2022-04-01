import React, { useRef, useEffect, useState } from 'react'
import mojs from "@mojs/core";


const CrossShape = (props) => {
    const cross = useRef()
    const crossContainer = useRef()
    const [showCrossContainer, setShowCrossContainer] = useState(true)

    useEffect(() => {
        cross.current = new mojs.Shape({
            parent: crossContainer.current,
            shape: 'cross',
            points: 100,
            scale: 1,
            rotate: { 45: 315 },
            stroke: 'black',
            radius: 25,
            radiusX: 25,
            strokeWidth: 20,
            duration: 1000,
        })

        cross.current.then({
            duration: 600,
            scale: 100,
            easing: "ease.in",
            onComplete() {
                props.loadPage(true)
            }
        }).then({
            duration: 1000,
            opacity: 0,
            easing: "ease.out",
            isShowEnd: false,
            onComplete() {
                setShowCrossContainer(false)
            }
        }).play()
    }, [])

    return (
        <div ref={crossContainer} style={showCrossContainer ? { position: "fixed", width: "100vw", height: "100vh", overflow: "hidden" } : { display: "none" }}></div>
    )
}

export default CrossShape