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

    const label = document.createElement("label");
    label.setAttribute("for", "slider-value")

    const input = document.createElement("input");
    input.setAttribute("id", "slider-value");
    input.type = "text";

    inputDiv.appendChild(sliderPara);
    sliderPara.appendChild(label);
    sliderPara.appendChild(input);
    inputDiv.appendChild(slider);
}

export {createInputField, createSlider};