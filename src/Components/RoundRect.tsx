import React from "react";

interface dimensions {
    width?: number;
    height?: number;
    children?: JSX.Element | never[];
}
export const RoundRect = ({width, height, children}: dimensions) => {
    return(
        <div className={`roundBox ` + (width == null ? `flex-grow ` : `w-${32*width} `) + (height == null ? `self-stretch ` : `h-${32*height} `)}>
            {children}
        </div>
    )
}