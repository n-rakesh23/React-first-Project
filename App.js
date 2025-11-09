import React from "react";
import { createRoot } from "react-dom/client";


const parent =React.createElement("div",{id:"parent",key:1},[
    React.createElement("div",{id:"child1",key:2},[
        React.createElement("h1",{key:"a"},"hiii im h1 tag"),
        React.createElement("h2",{key:"b"},"hiii im h2 tag")
    ]),
    React.createElement("div",{id:"child2",key:3},[
        React.createElement("h1",{key:"a"},"hiii im h1 tag"),
        React.createElement("h2",{key:"b"},"hiii im h2 tag")
    ])
]);

console.log(parent);
 
const root=createRoot(document.getElementById("root"));
//root.render(heading);
root.render(parent);