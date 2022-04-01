import React, { useRef, useEffect } from 'react'
import mojs from "@mojs/core";


const Sun = (props) => {
    const sun = useRef()
    const sunShine = useRef()
    const sunContainer = useRef()

    useEffect(() => {
        const sunPos = {
            left: 0,
            top: 0,
            x: 100,
            y: 100,
            parent: sunContainer.current,
        }
        sun.current = new mojs.Shape({
            ...sunPos,
            scale: { 0.9: 1.1 },
            radius: 50,
            duration: 1200,
            fill: 'orange',
            timeline: { onComplete: function () { this.replay(); } }
        })

        sunShine.current = new mojs.Burst({
            ...sunPos,
            radius: { 50: 70 },
            count: 8,
            rotate: { 0: 90 },
            timeline: { onComplete: function () { this.replay(); } },
            children: {
                shape: 'curve',
                duration: 1200,
                rotate: 270,
                radiusX: 15,
                radiusY: 20,
                fill: 'orange',
                scale: 1,
                ease: 'linear.none'
            }
        })

        sun.current.then({
            scale: 0.9,
            duration: 1200,
        }).play()

        sunShine.current.then({
            radius: 50,
            rotate: 180,
            children: {
                rotate: 270,
                ease: 'linear.none'
            }
        }).play()

        return (() => {
            sun.current.reset();
            sunShine.current.reset();
            sun.current.el.remove();
            sunShine.current.el.remove();
        })
    }, [])
    return (
        <div className='weatherbg sunbg' ref={sunContainer}></div>
    )
}

export default Sun