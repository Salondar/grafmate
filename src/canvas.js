const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const SCALING_FACTOR = 15;
const NUMBER_SCALE = SCALING_FACTOR * 5;

function drawVerticalLines() {
    let x = 0;
    while (x < canvas.width) {

        if (x === 0) {
            ctx.lineWidth = 0.3;
        }
        else if (x % NUMBER_SCALE === 0) {
            ctx.lineWidth = 0.2;
        }
        ctx.beginPath();
        ctx.moveTo(x, -canvas.height);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-x, -canvas.height);
        ctx.lineTo(-x, canvas.height);
        ctx.stroke();

        x += SCALING_FACTOR;
        ctx.lineWidth = 0.1;
    }
}

function drawHorizontalLines() {
    let y = 0;

    while (y < canvas.height) {
        if (y === 0) {
            ctx.lineWidth = 0.3;
        }
        if (y % NUMBER_SCALE === 0) {
            ctx.lineWidth = 0.2;
        }
        ctx.beginPath();
        ctx.moveTo(-canvas.height, y);
        ctx.lineTo(canvas.height, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-canvas.height, -y);
        ctx.lineTo(canvas.height, -y);
        ctx.stroke();

        y += SCALING_FACTOR;
        ctx.lineWidth = 0.1
    }
}

function drawGrid() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2); // Go to the center of the canvas
    drawVerticalLines();
    drawHorizontalLines();
}

function plotFunction() {

}

function runMonotonicityAnimation() {
    
}

export {drawGrid, plotFunction, runMonotonicityAnimation};