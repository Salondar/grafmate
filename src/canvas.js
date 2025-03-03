const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const SCALING_FACTOR = 15;
const NUMBER_SCALE = SCALING_FACTOR * 5;

let maxX, maxY; // There seems to be no good reason to use these variables. Think of sth better

function drawVerticalLines() {
    let x = 0, xval = 1;
    while (x < canvas.width) {

        if (x === 0) {
            ctx.lineWidth = 0.3;  // Width of Main Y Axis
        }
        else if (x % NUMBER_SCALE === 0) {
            ctx.lineWidth = 0.2;
            ctx.fillText(xval, x - 5, 12);
            ctx.fillText(-xval, -x - 5, 12);
            xval++;
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
    maxX = xval;
}

function drawHorizontalLines() {
    let y = 0, yval = 0;
  

    while (y < canvas.height) {
        if (y === 0) {
            ctx.lineWidth = 0.3;  // Width of Main x Axis
            ctx.fillText(yval, -12, y + 12);
            yval++;

        }
        else if (y % NUMBER_SCALE === 0) {
            ctx.lineWidth = 0.2;
            ctx.fillText(-yval, -16, y + 5);
            ctx.fillText(yval, -12, -y + 5);
            yval++;
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
    maxY = yval;
}

function drawGrid() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2); // Go to the center of the canvas
    ctx.font = "15px arial";
    drawVerticalLines();
    drawHorizontalLines();
}

function plotFunction(expr) {
    // Todo . Use mathjs functions to compile and store all values
    // of x. use plot example as inspiration
}

function runMonotonicityAnimation() {
    
}

export {drawGrid, plotFunction, runMonotonicityAnimation};