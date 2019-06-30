import * as React from "react";
export const Rectangle = props => {
    const { width = 30, height = 30, x = 0, y = 0, rotation = 0, pivotX = 0, pivotY = 0, } = props;
    return (React.createElement("svg", { width: width, height: height, viewBox: `0 0 ${width} ${height}`, transform: `translate(${x}, ${y}) rotate(${rotation}, ${pivotX}, ${pivotY})`, style: {
            position: "absolute",
        } },
        React.createElement("rect", { width: "100%", height: "100%", fill: "#000000" })));
};
//# sourceMappingURL=Rectangle.js.map