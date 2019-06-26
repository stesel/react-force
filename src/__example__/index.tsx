import * as React from "react";
import * as ReactDOM from "react-dom";
import { Rectangle } from "../primitives/Rectangle";

const App: React.FC = () => {
    return (
        <section>
            <h1>React With Force!</h1>
            <Rectangle width={30} height={30} />
        </section>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("app"),
);
