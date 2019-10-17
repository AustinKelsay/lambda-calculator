import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {numbers, operators, specials} from "./data";

function Calculator() {

const [numberState, setNumberState] = useState(numbers);


}

ReactDOM.render(<App />, document.getElementById("root"));
