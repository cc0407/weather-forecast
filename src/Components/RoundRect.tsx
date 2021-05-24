import React from "react";

export const RoundRect = ({width, height}) => {
    return(
        <div className={`roundBox ` + (width == 'auto' ? `flex-grow ` : `w-${32*width} `) + (height == 'auto' ? `self-stretch ` : `h-${32*height} `)}>
            test
        </div>
    )
}