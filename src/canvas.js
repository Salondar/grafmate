import {create, all} from "mathjs";
const config = {};
const math = create(all, config);

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
    let compileExpr, xValues, yValues, px1, py1, px2, py2;

    try {
        compileExpr = math.compile(expr);
        xValues = math.range(-maxX, maxX, 0.01).toArray();
        yValues = xValues.map((x) => {
            return compileExpr.evaluate({x:x});
        })
    }
    catch(err) {
        return;
    }

    px1 = xValues.shift() * NUMBER_SCALE;
    py1 = -(yValues.shift() * NUMBER_SCALE);

    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    for (const value of xValues) {
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        px2 = value * NUMBER_SCALE;
        py2 = -(yValues.shift() * NUMBER_SCALE);
        ctx.lineTo(px2, py2);
        ctx.stroke();

        px1 = px2;
        py1 = py2;
    }
}

function drawCurrentMonotonicityPic(xval, expr) {
    let y, px, py;
    try {
        y = math.compile(expr).evaluate({x:xval});
    }
    catch {
        return;
    }
    
    px = xval * NUMBER_SCALE;
    py = -(y * NUMBER_SCALE);

    prepareForRedraw();
    plotFunction(expr)

    ctx.font = "20px serif";
    if (xval < 0) {
        ctx.fillText(`(${xval}, ${y.toFixed(2)})`, px - 100, py);
    }
    else {
        ctx.fillText(`(${xval}, ${y.toFixed(2)})`, px + 30, py);
    }
    
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(px, 0);  // Starts from main x axis
    ctx.lineTo(px, py);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, py);  // Starts from main y axis
    ctx.lineTo(px, py);
    ctx.stroke();
}

function prepareForRedraw() {
    ctx.restore();
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawGrid();
}

export {drawGrid, plotFunction,prepareForRedraw, drawCurrentMonotonicityPic};