import { createInputField } from './components.js';
import { drawGrid, plotFunction } from './canvas.js';
import "./reset.css";
import "./style.css";

let expression;
createInputField();
drawGrid();

expression = document.querySelector("#expression");
expression.addEventListener("input", ()=> {
    plotFunction(expression.value);
})