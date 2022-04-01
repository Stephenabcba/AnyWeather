import React, { useRef, useEffect } from 'react'
import mojs from "@mojs/core";


const Cloud = (props) => {
    //no animations available yet.
    const cloud = useRef()
    const cloudContainer = useRef()
    useEffect(() => {
        class Cloud extends mojs.CustomShape {
            getShape() {
                return `
                <path transform="matrix(0.99 0 0 1.07 50.02 50) translate(-50, -26.26)" d="M 40.348 0.0002 C 32.972 0.0002 25.641 3.0372 20.425 8.2532 C 17.139 11.5392 14.72 15.665199999999999 13.379000000000001 20.112099999999998 C 10.155000000000001 20.7211 7.110000000000001 22.294099999999997 4.788000000000002 24.616099999999996 C 1.7620000000000022 27.642099999999996 1.7763568394002505e-15 31.895099999999996 1.7763568394002505e-15 36.17399999999999 C 1.7763568394002505e-15 40.45399999999999 1.7620000000000018 44.70799999999999 4.788000000000002 47.73389999999999 C 7.814000000000002 50.75989999999999 12.068000000000001 52.52189999999999 16.348000000000003 52.52189999999999 L 89.565 52.52189999999999 C 92.297 52.52189999999999 95.012 51.397899999999986 96.944 49.46589999999999 C 98.876 47.53389999999999 100 44.81889999999999 100 42.08689999999999 C 100 39.354899999999994 98.876 36.640899999999995 96.944 34.70889999999999 C 95.024 32.78889999999999 92.33 31.667899999999992 89.61500000000001 31.654899999999994 C 89.08500000000001 26.704899999999995 86.843 21.940999999999995 83.32000000000001 18.418989999999994 C 79.263 14.361989999999993 73.56200000000001 11.999989999999993 67.825 11.999989999999993 C 66.432 11.999989999999993 65.042 12.142989999999994 63.67700000000001 12.411989999999994 C 62.678000000000004 10.920989999999994 61.540000000000006 9.522989999999995 60.269000000000005 8.252989999999993 C 55.053000000000004 3.036989999999993 47.72200000000001 -0.00001000000000672685 40.346000000000004 -0.00001000000000672685 z" stroke-linecap="round" />
                `
            }
        }
        mojs.addShape('cloud', Cloud)
        // cloud.current = []
        // for (let i = 0; i < 5; i++) {
        //     cloud.current.push(
        //         new mojs.Shape({
        //             parent: cloudContainer.current,
        //             shape: 'cloud',
        //             fill: 'rgba(255,255,255,0.7)',
        //             radius: 'rand(150,200)',
        //             scale: { 1: 1.2 },
        //             top: 0,
        //             left: 0,
        //             x: 'rand(30vw,70vw)',
        //             y: 'rand(10vh,20vh)',
        //             duration: 1000,
        //         })
        //     )
        //     cloud.current[i].generate().play()
        // }
        cloud.current = new mojs.stagger(mojs.Shape)({
            quantifier: 5,
            parent: cloudContainer.current,
            shape: 'cloud',
            fill: 'white',
            fillOpacity: 'rand(0.4,0.75)',
            radius: 'rand(150,200)',
            scale: { 1: 1.2 },
            top: 0,
            left: 0,
            // x: 'rand(30vw,70vw)',
            x: 'stagger(30vw,rand(10vw,12vw))',
            y: 'rand(15vh,30vh)',
            duration: 3000,
            easing: 'cubic.inout',
            isShowStart: true,
            timeline: { onComplete: function () { this.replay(); } }
        })
        cloud.current.generate().then({
            scale: 1,
            duration: 3000,
            easing: 'cubic.inout',
        }).play()
    }, [])
    return (
        <div ref={cloudContainer} className='weatherbg cloudbg'></div>
    )
}

export default Cloud