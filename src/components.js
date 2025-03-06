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
    inputDiv.appendChild(slider);
}

export {createInputField, createSlider};