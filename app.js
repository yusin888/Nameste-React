import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const elem = <span>React Element</span>
//React Element
const title = (
  <h1 className="heading" tabIndex="1">
    {elem}
    Nameste React using Jsx
  </h1>
);
console.log(title);

//React Element can be converted into a React component by adding arrow functions 
const Title  = () => (<h1> Nameste react from  Title  component</h1>)

//React component can either be (1) Class based component (2)Functional Component
// Functional component - a function that returns a React Element or Jsx code 
//component composition is also use for reusability
const  HeadingComponent = () => ( 
  <div id="container">
    {title}
    <Title />   
    <Title></Title>
    {Title()}            
    <h1 className="heading" >
      Nameste React from functional component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
