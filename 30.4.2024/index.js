let count = 0;
let isCircle = false;
let isSqr =false;

const shapeDiv = document.getElementById('shape');
const countDiv = document.getElementById('count');

function updateShape() {
    if (count % 5 === 0) {
        shapeDiv.style.borderRadius = '50%';
        isCircle = true;
    } else if (count % 2 === 0) {
        shapeDiv.style.width= "50px"
        shapeDiv.style.height= "50px"
        isCircle = false;
    }
    else if (count % 3== 0) {
            shapeDiv.style.borderRadius = '0';
            isCircle = false;
            isSqr=false;
        }
    else {
        shapeDiv.style.borderRadius = '0';
        isCircle = false;
    }
}

function updateCount() {
    countDiv.textContent = count;
}

function totap() {
    count++;
    updateShape();
    updateCount();
}

function tosetBack() {
    count = 0;
    updateShape();
    updateCount();
}

function redColor() {
    shapeDiv.style.backgroundColor = 'red';
}

function greenColor() {
    shapeDiv.style.backgroundColor = 'green';
}
