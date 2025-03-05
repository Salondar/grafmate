import { createInputField } from './components.js';
import { drawGrid, plotFunction, prepareForRedraw } from './canvas.js';
import "./reset.css";
import "./style.css";

let expression;
createInputField();
drawGrid();

expression = document.querySelector("#expression");
expression.addEventListener("input", ()=> {
    prepareForRedraw();
    plotFunction(expression.value);
})