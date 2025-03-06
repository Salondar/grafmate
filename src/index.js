import $ from "jquery";
import "jquery-ui";
import { createInputField, createSlider} from './components.js';
import { drawGrid, plotFunction, prepareForRedraw, drawCurrentMonotonicityPic} from './canvas.js';
import "./reset.css";
import "./style.css";

let expression;
createInputField();
drawGrid();

expression = document.querySelector("#expression");
expression.addEventListener("input", ()=> {
    prepareForRedraw();
    plotFunction(expression.value);
    createSlider();
    $("#slider").slider();
})

