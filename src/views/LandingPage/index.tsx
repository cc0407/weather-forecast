import React, { useEffect, useState } from 'react';

export const Landing = () => {
    const [coords, setCoords] = useState([null,null]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    });
    return (
        <div className="text-6xl font-mono">Landing</div>
    )
}
