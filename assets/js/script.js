let display = document.querySelector("#display");
let result = document.querySelector("#result");
let button = document.querySelectorAll(".btn");

var memory = 0;

for (const item of button) {
    item.addEventListener('click', (e => {
        var btnVal = e.target.value;
        display.value += btnVal;
        console.log(display.value);
    }));
}

function calculate() {
    let displayValue = display.value;
    display.value = eval(displayValue);
}

function degree() {
    display.value = (display.value * (180 / Math.PI)).toFixed(2);
}

function fixedExpo() {
    let value = Number(display.value).toExponential();
    display.value = value;
}

function memoryClear() {
    x = localStorage.clear();
    x = 0;
    document.getElementById('result').innerHTML = x;
    display.value = "";
}

function memoryRecall() {
    var x = localStorage.getItem(memory, display.value);
    document.getElementById('result').innerHTML = x;
    console.log(localStorage.getItem(memory, display.value));
    display.value = x;
}

function memoryPlus() {
    var result = Number(localStorage.getItem(memory, display.value)) + Number(display.value);
    console.log(result);
    localStorage.setItem(memory, result);
    document.getElementById('result').innerHTML = result;
}

function memoryMinus() {
    var result = Number(localStorage.getItem(memory, display.value)) - Number(display.value);
    console.log(result);
    localStorage.setItem(memory, result);
    document.getElementById('result').innerHTML = result;
}

function memoryStore() {
    localStorage.setItem(memory, display.value);
    var mem = localStorage.getItem(memory);
    document.getElementById('result').innerHTML = mem;
}

function trignometry() {
    let x = document.getElementById('trigno').value;
    if (x == 'sin') {
        sin();
    } else if (x == 'cos') {
        cos();
    } else if (x == 'tan') {
        tan();
    }
}

function sin() {
    display.value = Math.sin(display.value * Math.PI / 180).toFixed(2);
}

function cos() {
    display.value = Math.cos(display.value * Math.PI / 180).toFixed(2);
}

function tan() {
    display.value = Math.tan(display.value * Math.PI / 180).toFixed(2);
}

function func() {
    let x = document.getElementById('func').value;
    if (x == 'abs') {
        abs();
    } else if (x == 'floor') {
        floor();
    } else if (x == 'ceil') {
        ceil();
    }
}

function abs() {
    display.value = Math.abs(display.value);
}

function floor() {
    display.value = Math.floor(display.value);
}

function ceil() {
    display.value = Math.ceil(display.value);
}

function pi() {
    if (display.value == '') {
        display.value = 3.14;
    } else if (display.value == 0) {
        display.value = '0';
    } else {
        display.value = (display.value * 3.14).toFixed(3);
    }
}


function e() {
    if (display.value == "") {
        display.value = Math.E;
    } else {
        display.value = (display.value * Math.E).toFixed(3);
    }
}

function clearDisplay() {
    display.value = '';
}

function oneClear() {
    display.value = display.value.slice(0, display.value.length - 1);
}

function xpower() {
    display.value = Math.pow(display.value, 2);
}

function oneByNumber() {
    display.value = 1 / display.value;
}

function absulatevalue() {
    display.value = Math.abs(display.value);
}

function exponential() {
    display.value = Math.exp(display.value).toFixed(5);
}

function sqroot() {
    display.value = Math.sqrt(display.value);
}

function powX() {
    display.value = Math.pow(10, display.value);
}

function log() {
    display.value = Math.log10(display.value).toFixed(2);
}

function ln() {
    display.value = Math.log(display.value).toFixed(2);
}

function factorial() {
    var i, num, f;
    f = 1;
    num = display.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    display.value = f;
}

function plusMinus(){
    display.value = display.value * -1;
}

function showOpt(){
    display.value = 2 ** display.value;
}