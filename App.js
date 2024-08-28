import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" },
            [
                React.createElement("h1", {}, "JavaScript"),
                React.createElement("h2", {}, "Master it from Namaste JavaScript")
            ]
        ),
        React.createElement("div", { id: "child1" },
            [
                React.createElement("h1", {}, "Namaste React"),
                React.createElement("h2", {}, "Master it from Namaste React")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);