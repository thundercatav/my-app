import React from "react"
import reactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.css"

const element = <h1>Hello World</h1>

console.log(element)

reactDom.render(element, document.getElementById('root'))