import * as React from "react";
import * as ReactDOM from "react-dom";
import { Rectangle } from "../primitives/Rectangle";
import {
    connectGravity,
    EARTH_GRAVITY_ACCELERATION,
    Gravity,
} from "../gravity/Gravity";

const App: React.FC = () => {
    const RectWithGravity = connectGravity(Rectangle);
    return (
        <section>
            <h1>React With Force!</h1>
            <Gravity gravityAcceleration={EARTH_GRAVITY_ACCELERATION}>
                <RectWithGravity
                    x={0}
                    y={0}
                    width={30}
                    height={30}
                    rotation={45}
                    pivotX={30}
                    pivotY={30}
                    weight={1}
                />
            </Gravity>
        </section>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("app"),
);
