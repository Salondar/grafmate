const sliderContainer = document.querySelector("#slider-container");
const btnContainer = document.querySelector("#button-container");
const expressionField = document.querySelector(".expression-field");

function createInputField() {
    const input = document.createElement("input");
    input.setAttribute("id", "expression");
    input.type = "text";
    input.placeholder = "Expressão...";
    expressionField.appendChild(input);
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

    sliderContainer.appendChild(sliderPara);
    sliderPara.appendChild(label);
    sliderPara.appendChild(input);
    sliderContainer.appendChild(slider);
}

function createYesNoButtons () {
    const questionPara = document.createElement("p");
    questionPara.textContent = "Adicionar um deslizador?"
    btnContainer.appendChild(questionPara);

    const yesButton = document.createElement("button");
    yesButton.setAttribute("id", "yes-button");
    yesButton.textContent  = "sim";

    const noButton = document.createElement("button");
    noButton.setAttribute("id", "no-button");
    noButton.textContent = "não";

    btnContainer.appendChild(yesButton);
    btnContainer.appendChild(noButton);
}
export {createInputField, createSlider, createYesNoButtons};