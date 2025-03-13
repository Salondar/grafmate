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

function addButtons () {
    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("id", "button-container");

    const yesButton = document.createElement("button");
    yesButton.setAttribute("id", "yes-button");

    const noButton = document.createElement("button");
    noButton.setAttribute("id", "no-button");

    inputDiv.appendChild(buttonContainer);
    buttonContainer.appendChild(yesButton);
    buttonContainer.appendChild(noButton);
}
export {createInputField, createSlider, addButtons};