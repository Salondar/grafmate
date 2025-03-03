const inputDiv = document.querySelector(".input");

function createInputField() {
    const input = document.createElement("input");
    input.setAttribute("id", "expression");
    input.type = "text";
    input.placeholder = "Expressão...";
    inputDiv.appendChild(input);
}

export {createInputField}