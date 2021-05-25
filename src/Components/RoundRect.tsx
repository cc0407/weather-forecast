import React from "react";

interface dimensions {
    width?: number;
    height?: number;
}
export const RoundRect = ({width, height}: dimensions) => {
    return(
        <div className={`roundBox ` + (width == null ? `flex-grow ` : `w-${32*width} `) + (height == null ? `self-stretch ` : `h-${32*height} `)}>
            test
        </div>
    )
}