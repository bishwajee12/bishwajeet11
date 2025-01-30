function calculatePerimeter() {
    let a = parseFloat(document.getElementById('sideA').value);
    let b = parseFloat(document.getElementById('sideB').value);
    let c = parseFloat(document.getElementById('sideC').value);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        document.getElementById('perimeterResult').innerText = "Perimeter: " + (a + b + c);
    } else {
        document.getElementById('perimeterResult').innerText = "Please enter valid numbers.";
    }
}

function calculateArea() {
    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);
    if (!isNaN(base) && !isNaN(height)) {
        document.getElementById('areaResult').innerText = "Area: " + (0.5 * base * height);
    } else {
        document.getElementById('areaResult').innerText = "Please enter valid numbers.";
    }
}

function calculateVolume() {
    let base = parseFloat(document.getElementById('prismBase').value);
    let height = parseFloat(document.getElementById('prismHeight').value);
    let length = parseFloat(document.getElementById('prismLength').value);
    if (!isNaN(base) && !isNaN(height) && !isNaN(length)) {
        document.getElementById('volumeResult').innerText = "Volume: " + (0.5 * base * height * length);
    } else {
        document.getElementById('volumeResult').innerText = "Please enter valid numbers.";
    }
}
