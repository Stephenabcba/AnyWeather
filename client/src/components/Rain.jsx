import React, { useRef, useEffect } from 'react'
import mojs from "@mojs/core";


const Rain = (props) => {
    const rain = useRef()
    const rainContainer = useRef()

    useEffect(() => {


        rain.current = new mojs.stagger(mojs.Shape)({
            parent: rainContainer.current,
            // repeat: 100,
            quantifier: 50,
            shape: 'rect',
            radiusX: 0.7,
            radiusY: 7,
            y: { '0vh': '100vh' },
            x: { 'rand(0vw,70vw)': 'rand(30vw,100vw)' },
            fill: 'white',
            fillOpacity: { 1: 0 },
            duration: 1500,
            scale: 1,
            left: 0,
            top: 0,
            isShowEnd: false,
            ease: 'linear.none',
            delay: 'stagger(0, 30)',
            onComplete: function () { this.generate().replay(); }
        })
        rain.current.generate().play()
        return () => {
            rain.current.timeline.reset()
        }

    }, [])

    return (
        <div className='weatherbg rainbg' ref={rainContainer}>
        </div >
    )
}

export default Rain