const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


const SCALING_FACTOR = 10;
const NUMBER_SCALE = SCALING_FACTOR * 5;
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

function drawLines(lineType) {
    ctx.save();
    ctx.translate(canvas.width, canvas.height); // Go to the center of the canvas

    let size, i = 0;

    if (lineType === "h") {
        size = canvas.width;
    }
    else if (lineType === "v") {
        size = canvas.height;
    }

    while (i < size / 2) {
        ctx.beginPath();
        if (i === 0) {
            ctx.lineWidth = 1;
        }
        else if (i % NUMBER_SCALE === 0) {
            ctx.lineWidth = 0.3;
        }   ctx.beginPath();
        ctx.moveTo(i, -canvas.height);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-i, -canvas.height);
        ctx.lineTo(-i, canvas.height);
        ctx.stroke();

        i += NUMBER_SCALE;
        ctx.lineWidth = 0.1
    }
}

function drawGrid() {
    drawLines("v"); // Draw horizontal lines
    //drawLines(); // Draw vertical lines
}
function plotFunction() {

}

function runMonotonicityAnimation() {
    
}

export {drawGrid, plotFunction, runMonotonicityAnimation};