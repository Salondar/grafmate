import $ from "jquery";
import "jquery-ui";
import { createInputField, createSlider, createYesNoButtons} from './components.js';
import { drawGrid, plotFunction, prepareForRedraw, drawCurrentMonotonicityPic} from './canvas.js';
import "./reset.css";
import "./style.css";

let expression;
createInputField();
drawGrid();

expression = document.querySelector("#expression");
const inputDiv = document.querySelector(".input");
let btnContainer, yesBtn, noBtn, slider, createButtons, hasButtons;

expression.addEventListener("input", ()=> {
    hasButtons = false;
    createButtons = false;
    prepareForRedraw();
    createButtons = plotFunction(expression.value);

    if (createButtons) {
      createYesNoButtons(); 
      hasButtons = true;
    }
    if (hasButtons) {
    btnContainer = document.querySelector("#button-container");
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