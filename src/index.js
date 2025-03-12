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
    runSliderAnimation();
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
          }
        });
        $( "#slider-value" ).val( "x = " + $( "#slider" ).slider( "value" ) );
      } );    
}
