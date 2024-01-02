import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() => JS Object => Html Element (upon rendering)

const heading = React.createElement("h1", { id: "heading" }, "Nameste React");

console.log(heading);

//JSX - Html-like or XML-like syntax
//it is more developer friendly then React.createElement()

// Parcel transpiles jsx before it reaches js engine or browser using Babel
// JSX => React.createElement() => JS Object => Html Element (upon rendering)
const jsxHeading = <h1 id="heading">Nameste React using Jsx</h1>;
console.log(jsxHeading);

// multiple line Jsx code should be wrapped in parenthesis
const jsxHeading1 = (
  <h1 className="heading" tabIndex="1">
    Nameste React using Jsx
  </h1>
);
console.log(jsxHeading1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
