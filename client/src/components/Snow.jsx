import React, { useRef, useEffect } from 'react'
import mojs from "@mojs/core";

const Snow = (props) => {


    const snow = useRef()
    const snowContainer = useRef()

    useEffect(() => {
        class Snow extends mojs.CustomShape {
            getShape() {
                return `
                <path d="M 87.81039 66.07533 C 87.4494 65.23030999999999 86.47242 64.83631 85.62344999999999 65.19631 L 78.72662999999999 68.14237 L 69.34486999999999 62.72526 L 81.60455999999999 57.48715 C 82.45154 57.12614 82.84452999999999 56.14712 82.48353999999999 55.30011 C 82.12254999999999 54.454089999999994 81.14456999999999 54.060089999999995 80.29659999999998 54.42109 L 65.73796999999999 60.64121 L 59.20113999999999 56.86613 L 71.31282999999999 51.52502 C 71.91780999999999 51.259009999999996 72.30779999999999 50.66 72.30779999999999 49.99999 C 72.30779999999999 49.33998 71.91780999999999 48.740959999999994 71.31282999999999 48.474959999999996 L 59.201139999999995 43.133849999999995 L 65.73796999999999 39.35876999999999 L 80.29659999999998 45.578889999999994 C 80.51058999999998 45.669889999999995 80.73158999999998 45.71388999999999 80.94957999999998 45.71388999999999 C 81.59655999999998 45.71388999999999 82.21254999999998 45.33387999999999 82.48253999999999 44.700869999999995 C 82.84452999999999 43.85484999999999 82.45153999999998 42.874829999999996 81.60355999999999 42.51382999999999 L 69.34386999999998 37.27571999999999 L 78.72562999999998 31.85860999999999 L 85.62244999999999 34.80366999999999 C 85.83643999999998 34.89466999999999 86.05743999999999 34.93866999999999 86.27542999999999 34.93866999999999 C 86.92340999999999 34.93866999999999 87.53839999999998 34.55865999999999 87.80838999999999 33.92564999999999 C 88.17038 33.07962999999999 87.77738999999998 32.09960999999999 86.92940999999999 31.73860999999999 L 82.33252999999999 29.77456999999999 L 86.66141999999999 27.27451999999999 C 87.45939999999999 26.813509999999987 87.73138999999999 25.795489999999987 87.27139999999999 24.99746999999999 C 86.80940999999999 24.199449999999988 85.78943999999998 23.92544999999999 84.99445999999999 24.38745999999999 L 80.66456999999998 26.887509999999992 L 81.26254999999999 21.92340999999999 C 81.37355 21.00938999999999 80.72156 20.17936999999999 79.80758999999999 20.06936999999999 C 78.89560999999999 19.95736999999999 78.06362999999999 20.609379999999987 77.95364 21.525399999999987 L 77.05666 28.971549999999986 L 67.6749 34.38865999999999 L 69.26986 21.150389999999987 C 69.38086 20.236369999999987 68.72887 19.40634999999999 67.8149 19.296349999999986 C 66.89891999999999 19.181349999999988 66.07094 19.836359999999985 65.96095 20.752379999999985 L 64.067 36.471699999999984 L 57.53016999999999 40.24577999999998 L 58.96112999999999 27.084519999999983 C 59.03312999999999 26.428509999999985 58.70913999999999 25.791489999999982 58.13714999999999 25.461489999999984 C 57.56515999999999 25.132479999999983 56.951179999999994 25.169479999999982 56.41618999999999 25.559489999999983 L 45.83145999999999 33.38064999999998 L 45.83145999999999 27.49852999999998 L 58.40013999999999 17.99733999999998 C 59.13611999999999 17.44632999999998 59.23711999999999 16.40030999999998 58.684129999999996 15.66428999999998 C 58.13314 14.929279999999979 57.163169999999994 14.77726999999998 56.424189999999996 15.33227999999998 L 45.830459999999995 23.332439999999977 L 45.830459999999995 10.832189999999978 L 51.733309999999996 6.332099999999977 C 52.469289999999994 5.781089999999978 52.57028999999999 4.735069999999977 52.0173 3.9990499999999773 C 51.46631 3.2640399999999774 50.49734 3.112029999999977 49.75736 3.6670399999999774 L 45.83046 6.667099999999977 L 45.83046 1.6669999999999776 C 45.83046 0.7469799999999777 45.08348 -0.000030000000022400997 44.164500000000004 -0.000030000000022400997 C 43.24452 -0.000030000000022400997 42.498540000000006 0.7469899999999776 42.498540000000006 1.6669999999999776 L 42.498540000000006 6.667099999999977 L 38.402640000000005 3.6670399999999774 C 37.66666000000001 3.1140299999999774 36.573690000000006 3.2650299999999772 36.0217 3.9990499999999773 C 35.469710000000006 4.735059999999978 35.69071 5.781089999999978 36.42669 6.332099999999977 L 42.49853 10.832189999999978 L 42.49853 23.333439999999978 L 31.73581 15.333279999999979 C 30.99783 14.780269999999978 29.90586 14.931269999999978 29.354870000000002 15.66528999999998 C 28.802880000000002 16.401299999999978 29.023880000000002 17.44732999999998 29.759860000000003 17.998339999999978 L 42.49853 27.49952999999998 L 42.49853 33.38164999999998 L 31.72081 25.56048999999998 C 31.18782 25.17047999999998 30.42684 25.13347999999998 29.85486 25.46248999999998 C 29.28287 25.79349999999998 28.935879999999997 26.429509999999983 29.00688 27.08551999999998 L 30.425839999999997 40.24677999999998 L 25.325969999999998 37.30571999999998 L 23.43002 21.58639999999998 C 23.32002 20.67137999999998 22.49004 20.02436999999998 21.57407 20.13036999999998 C 20.66009 20.24036999999998 20.00811 21.070389999999982 20.11911 21.984409999999983 L 21.71207 35.22267999999998 L 10.887350000000001 28.972549999999984 L 9.990370000000002 21.526399999999985 C 9.881370000000002 20.612379999999984 9.047390000000002 19.969369999999984 8.136420000000003 20.070369999999986 C 7.222440000000002 20.180369999999986 6.571460000000003 21.010389999999987 6.681460000000003 21.924409999999988 L 7.279440000000003 26.88850999999999 L 2.949550000000003 24.388459999999988 C 2.149570000000003 23.92644999999999 1.133600000000003 24.201459999999987 0.6726100000000028 24.998469999999987 C 0.2126200000000028 25.796489999999988 0.4856100000000028 26.814509999999988 1.2825900000000028 27.275519999999986 L 5.611480000000003 29.775569999999988 L 1.0146000000000033 31.73960999999999 C 0.16762000000000332 32.100619999999985 -0.22536999999999674 33.07963999999999 0.1356200000000033 33.92664999999999 C 0.4056100000000033 34.55965999999999 1.0216000000000034 34.939669999999985 1.6685800000000035 34.939669999999985 C 1.8865700000000034 34.939669999999985 2.1095700000000033 34.89566999999999 2.3215600000000034 34.80466999999999 L 9.217380000000002 31.85960999999999 L 20.0421 38.10973999999999 L 7.7824100000000005 43.34784999999999 C 6.9364300000000005 43.70885999999999 6.54344 44.687879999999986 6.9044300000000005 45.53488999999999 C 7.1744200000000005 46.16689999999999 7.7904100000000005 46.54690999999999 8.43739 46.54690999999999 C 8.655380000000001 46.54690999999999 8.87838 46.50290999999999 9.091370000000001 46.41190999999999 L 23.649 40.19178999999999 L 28.74187 43.13284999999999 L 16.63018 48.47395999999999 C 16.025199999999998 48.73996999999999 15.635209999999999 49.33897999999999 15.635209999999999 49.99898999999999 C 15.635209999999999 50.65899999999999 16.025199999999998 51.258019999999995 16.63018 51.52401999999999 L 28.74187 56.86512999999999 L 23.649 59.806189999999994 L 9.091370000000001 53.58606999999999 C 8.24139 53.224059999999994 7.2654200000000015 53.61706999999999 6.904430000000001 54.46408999999999 C 6.542440000000002 55.31110999999999 6.935430000000001 56.29112999999999 7.782410000000001 56.651129999999995 L 20.0421 61.889239999999994 L 9.217380000000002 68.13937 L 2.3215600000000025 65.19331 C 1.4745800000000027 64.8323 0.49561000000000255 65.22631 0.13462000000000263 66.07233 C -0.22736999999999735 66.91834999999999 0.16562000000000263 67.89837 1.0136000000000025 68.25936999999999 L 5.610480000000003 70.22340999999999 L 1.2815900000000022 72.72345999999999 C 0.4836100000000022 73.18446999999999 0.21162000000000214 74.20248999999998 0.6716100000000023 75.00050999999999 C 0.9816000000000022 75.53551999999999 1.5405900000000021 75.83452999999999 2.116570000000002 75.83452999999999 C 2.398560000000002 75.83452999999999 2.686560000000002 75.76352999999999 2.9485500000000022 75.61152999999999 L 7.278440000000002 73.11147999999999 L 6.680460000000002 78.07557999999999 C 6.569460000000002 78.98959999999998 7.221450000000002 79.81961999999999 8.135420000000002 79.92961999999999 C 8.203420000000001 79.93761999999998 8.270420000000001 79.94161999999999 8.33641 79.94161999999999 C 9.167390000000001 79.94161999999999 9.886370000000001 79.32060999999999 9.98737 78.47358999999999 L 10.88435 71.02743999999998 L 21.70807 64.77730999999999 L 20.115109999999998 78.01557999999999 C 20.004109999999997 78.92959999999998 20.6561 79.75961999999998 21.570069999999998 79.86961999999998 C 21.63807 79.87761999999998 21.70507 79.88161999999998 21.77106 79.88161999999998 C 22.60204 79.88161999999998 23.321019999999997 79.26060999999999 23.42202 78.41458999999999 L 25.31497 62.695269999999994 L 30.40784 59.75420999999999 L 28.97688 72.91547 C 28.904880000000002 73.57148 29.22887 74.2085 29.80086 74.5385 C 30.37185 74.86651 31.181820000000002 74.82951 31.71481 74.4405 L 42.49253 66.61934 L 42.49253 74.16748999999999 L 29.729860000000002 83.66867999999998 C 28.99388 84.21968999999999 28.795880000000004 85.26570999999998 29.347870000000004 86.00172999999998 C 29.898860000000003 86.73773999999997 31.014830000000003 86.88974999999998 31.753810000000005 86.33373999999998 L 42.49154000000001 78.33357999999998 L 42.49154000000001 89.16779999999999 L 36.39470000000001 93.66788999999999 C 35.65872000000001 94.21889999999999 35.46072000000001 95.26491999999999 36.012710000000006 96.00093999999999 C 36.5647 96.73594999999999 37.681670000000004 96.88895999999998 38.41865000000001 96.33294999999998 L 42.490550000000006 93.33288999999998 L 42.490550000000006 98.33298999999998 C 42.490550000000006 99.25400999999998 43.23753000000001 100.00001999999998 44.156510000000004 100.00001999999998 C 45.07649000000001 100.00001999999998 45.82247 99.25299999999997 45.82247 98.33298999999998 L 45.82247 93.33288999999998 L 49.725370000000005 96.33294999999998 C 50.025360000000006 96.55794999999998 50.32735 96.66595999999998 50.67535000000001 96.66595999999998 C 51.18234000000001 96.66595999999998 51.65832000000001 96.43595999999998 51.98532000000001 95.99894999999998 C 52.53831000000001 95.26293999999999 52.47331000000001 94.21690999999998 51.73733000000001 93.66589999999998 L 45.82148000000001 89.16580999999998 L 45.82148000000001 78.33158999999998 L 56.39021000000001 86.33174999999997 C 56.69120000000001 86.55674999999997 56.99219000000001 86.66475999999997 57.34019000000001 86.66475999999997 C 57.84718000000001 86.66475999999997 58.32316000000001 86.43475999999997 58.65016000000001 85.99774999999997 C 59.20315000000001 85.26173999999997 59.13815000000001 84.21570999999997 58.402170000000005 83.66469999999997 L 45.821490000000004 74.16350999999997 L 45.821490000000004 66.61535999999998 L 56.406220000000005 74.43651999999999 C 56.69821 74.65051999999999 56.995200000000004 74.75853 57.3432 74.75853 C 57.631190000000004 74.75853 57.89419 74.68453 58.15218 74.53553 C 58.72417 74.20451999999999 59.035160000000005 73.56850999999999 58.96416 72.9125 L 57.5272 59.751239999999996 L 64.06003 63.525319999999994 L 65.95197999999999 79.24463999999999 C 66.05398 80.09065999999999 66.77195999999999 80.71166999999998 67.60293999999999 80.71166999999998 C 67.66993999999998 80.71166999999998 67.73693999999999 80.70766999999998 67.80393 80.69966999999998 C 68.71790999999999 80.58966999999998 69.36889 79.75964999999998 69.25889 78.84562999999999 L 67.66393 65.60735999999999 L 77.04569 71.02446999999998 L 77.94266999999999 78.47061999999998 C 78.04467 79.31663999999998 78.76365 79.93864999999998 79.59362999999999 79.93864999999998 C 79.66062999999998 79.93864999999998 79.72863 79.93464999999998 79.79462 79.92664999999998 C 80.70859999999999 79.81664999999998 81.35958 78.98662999999998 81.24958 78.07260999999998 L 80.65159999999999 73.10850999999998 L 84.98149 75.60855999999998 C 85.24448 75.75955999999998 85.53147999999999 75.83155999999998 85.81347 75.83155999999998 C 86.38946 75.83155999999998 86.94944 75.53254999999999 87.25842999999999 74.99753999999999 C 87.71842 74.19951999999999 87.44542999999999 73.18149999999999 86.64845 72.72048999999998 L 82.31956 70.22043999999998 L 86.91644 68.25639999999999 C 87.76442 67.89538999999999 88.15741 66.91636999999999 87.79542 66.07035999999998 z M 21.44309 50.002 L 32.32981 45.2019 L 40.6436 50.002 L 32.32881 54.8021 z M 42.50355 62.48926 L 32.806799999999996 69.5194 L 34.141769999999994 57.68916 L 42.50456 52.88806 z M 42.50355 47.11495 L 34.14076 42.31385 L 32.80579 30.483610000000002 L 42.50254 37.51375 z M 45.83646 37.51375 L 55.34022 30.483610000000002 L 54.102250000000005 42.31385 L 45.83646 47.11495 z M 45.83646 62.48926 L 45.83646 52.889070000000004 L 54.102250000000005 57.69017 L 55.34022 69.52041 z M 55.62421 54.8021 L 47.309419999999996 50.002 L 55.62421 45.2019 L 66.51093 50.002 z"/>
                `
            }
        }
        mojs.addShape('snow', Snow);
        snow.current = new mojs.stagger(mojs.Shape)({
            parent: snowContainer.current,
            quantifier: 100,
            shape: 'snow',
            y: { '0vh': '100vh' },
            x: { 'rand(0vw,90vw)': 'rand(10vw,100vw)' },
            fill: 'white',
            fillOpacity: { 1: 0 },
            duration: 2500,
            scale: 0.1,
            left: 0,
            top: 0,
            isShowEnd: false,
            ease: 'linear.none',
            delay: 'stagger(0, 10)',
            onComplete: function () { this.generate().replay(); }
        })
        snow.current.generate().play()
        return () => {
            snow.current.timeline.reset()
        }

    }, [])


    return (
        <div className='weatherbg snowbg' ref={snowContainer}>
        </div >
    )
}

export default Snow