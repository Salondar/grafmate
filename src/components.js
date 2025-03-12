const inputDiv = document.querySelector(".input");

function createInputField() {
    const input = document.createElement("input");
    input.setAttribute("id", "expression");
    input.type = "text";
    input.placeholder = "Expressão...";
    inputDiv.appendChild(input);
}

function createSlider() {
    const slider = document.createElement("div");
    slider.setAttribute("id", "slider");
    const sliderPara = document.createElement("p");
    sliderPara.setAttribute("id", "slider-value");
    inputDiv.appendChild(sliderPara);
    inputDiv.appendChild(slider);
}

export {createInputField, createSlider};