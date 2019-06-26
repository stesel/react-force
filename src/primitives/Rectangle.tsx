import * as React from "react";

export interface RectangleProps {
    width: number;
    height: number;
}

export const Rectangle: React.FC<RectangleProps> = props => {
    const { width, height } = props;
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
        >
            <rect
                width="100%"
                height="100%"
                fill="#000000"
            />
        </svg>
    );
};
