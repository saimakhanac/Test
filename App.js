import React from "react";
import ReactDOM from "react-dom/client";

// React createElement => Object(initially) => HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");


// JSX is not html in JS 
// Jsx just have html like syntax


// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => React.createElement => Reactelement-JS Object => HTMLElement(render)

const jsxHeading = <h1>Namaste React in JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

