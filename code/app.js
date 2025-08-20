import React from "react"
import ReactDOM from "react-dom/client"

const heading  = React.createElement("h1",{id:"heading"},"Hi this is sambhav")

const jsxHeading = <h1>This shit is tough</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxHeading)