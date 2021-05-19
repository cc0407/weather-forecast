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
        <div className="screen">
            <RoundRect width={2} height={2}/>
        </div>
    )
}
