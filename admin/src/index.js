import React from "react"
import ReactDOM from "react-dom"

import App from "./Components/App"

const appContainer = document.getElementById('app');
let state = {
    input_val:"Welcome to React App with PHP API m",
    api_message:"",
}
ReactDOM.render(<App appState={state}/>, appContainer);


