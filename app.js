import React from 'react';
import  ReactDOM  from 'react-dom/client';

//Creating a nested structure in React
const parent = React.createElement('div',{id:"parent"},
React.createElement('div',{id:"child"},
[ //sibling h1 and h2 tag
React.createElement("h1",{},"im h1 tag"),
React.createElement("h2",{},"im h2 tag")

]))

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)