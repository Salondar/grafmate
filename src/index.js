import $ from "jquery";
import "jquery-ui";
import { createInputField, createSlider, createYesNoButtons} from './components.js';
import { drawGrid, plotFunction, prepareForRedraw, drawCurrentMonotonicityPic} from './canvas.js';
import "./reset.css";
import "./style.css";

let expression;
createInputField();
drawGrid();

expression = document.querySelector(".expression-field");
const inputDiv = document.querySelector(".input");
let yesBtn, noBtn, createButtons;
const sliderContainer = document.querySelector("#slider-container");
const btnContainer = document.querySelector("#button-container");;

expression.addEventListener("input", ()=> {
    sliderContainer.innerHTML = "";
    btnContainer.innerHTML = "";
    prepareForRedraw();
    createButtons = plotFunction(expression.value); // if maths thought expression is valid return true, otherwise return false

    if (createButtons) {
      createYesNoButtons();
      yesBtn = document.querySelector("#yes-button");
      noBtn = document.querySelector("#no-button");
      yesBtn.addEventListener("click", ()=> {
        createSlider();
        runSliderAnimation();
        inputDiv.removeChild(btnContainer);
      });
      noBtn.addEventListener("click", ()=> {
        inputDiv.removeChild(btnContainer);
      })
    }
    
})

function runSliderAnimation() {
    $( function() {
        $( "#slider" ).slider({
          value: 0,
          min: -10,
          max: 10,
          step: 0.1,
          slide: function( event, ui ) {
            $( "#slider-value" ).val( "x = " + ui.value );
            drawCurrentMonotonicityPic(ui.value, expression.value);
          }
        });
        $( "#slider-value" ).val( "x = " + $( "#slider" ).slider( "value" ) );
      } );    
}