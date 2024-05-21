/*
 *
 *
 *<div id="parent">
 *      <div id= "child">
 *       <h1>
 *       </h1>
 *   </div>
 * </div>
 *
 *
 *
 *
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2bvfgbsdhgdvbsjsd tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

const headding = React.createElement(
  "h1",
  { id: "heading" },
  "hey I'm trying to write a code on my own la la la"
);
console.log(headding);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
