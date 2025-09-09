import React from "react"
import { createRoot } from "react-dom/client"
const headingRct = React.createElement('h4',{ 'id': 'title'}, 'This is a React Hello world')
const rootReact = ReactDOM.createRoot(document.getElementById('root'))
rootReact.render(headingRct)

/*
 div#parent
    div#child1
       h1
       h1
    
    div#child2
       h2
       h2
*/

const nestedRoot = ReactDOM.createRoot(document.getElementById('rootJS'))
const nestedEle = React.createElement( 'div' , { 'id': 'parent'} , [
    React.createElement( 'div' , { id : 'child1'} , [React.createElement('h1', "", 'I am a child1 h1 tag1'),React.createElement('h1', "", 'I am a child1 h1 tag2') ]),
    React.createElement( 'div' , { id : 'child2'} , [React.createElement('h2', "", 'I am a child1 h2 tag1'),React.createElement('h2', "", 'I am a child2 h2 tag2') ])
])
nestedRoot.render(nestedEle)