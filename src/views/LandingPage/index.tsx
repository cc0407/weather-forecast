import React, { useEffect, useState } from 'react';
import { RoundRect } from '../../Components/RoundRect';

export const Landing = () => {
    const [coords, setCoords] = useState([null,null]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    });
    return (
        fiveDay()
    )
}

const overview = () => {
    return (
        <div className="screen">
                <div className="Row">
                    <div className="Col items-stretch">
                        <RoundRect width={2} height={3}/>
                        <RoundRect width={2} height={3}/>
                    </div>
                    <RoundRect width={'auto'} height={'auto'}/>
                </div>
        </div>
    )
}

const fiveDay = () => {
    return (
        <div className="screen items-center justify-center">
                <div className="w-full pb-8 Row items-center justify-center">
                    <div className="title">This is the five day forecast.</div>
                </div>
                <div className="Row">
                    <RoundRect width={1.5} height={1.5}/>
                    <RoundRect width={1.5} height={1.5}/>
                    <RoundRect width={1.5} height={1.5}/>
                    <RoundRect width={1.5} height={1.5}/>
                    <RoundRect width={1.5} height={1.5}/>
                </div>
        </div>
    )
}