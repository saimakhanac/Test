import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");


const spanItem = <span>One more react element</span>
const Title = () => <h1 className="head">Namaste React in JSX</h1>;

const subtitle = <h1>HEyyyy{spanItem}</h1>;

// React Functional Component

// without using return keyword
const fn = () => true;

const number = 10000;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {Title()}
      {subtitle}
      <h2>{number * 5}</h2>
      <h1>{console.log("fhghjsghjdgdh")}</h1>
      <h1 className="head">Namaste React Functional Component</h1>;
    </div>
  );
};
// Both are same top bottom

// const HeadingComponent2 = () => <h1 className="head">Namaste React Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
