import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const jsxHeading = <h1>Namaste React in JSX</h1>;

// React Functional Component

// without using return keyword
const fn = () => true;

const HeadingComponent = () => {
  return <h1 className="head">Namaste React Functional Component</h1>;
};
// Both are same top bottom

// const HeadingComponent2 = () => <h1 className="head">Namaste React Functional Component</h1>;



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
