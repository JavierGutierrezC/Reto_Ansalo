let screen = document.getElementById("screen"); 
const zero = document.getElementById("Zero"); 
const one = document.getElementById("One"); 
const two = document.getElementById("Two"); 
const three = document.getElementById("Three"); 
const four = document.getElementById("Four"); 
const five = document.getElementById("Five"); 
const six = document.getElementById("Six"); 
const seven = document.getElementById("Seven"); 
const eight = document.getElementById("Eight"); 
const nine = document.getElementById("Nine"); 
const suma = document.getElementById("Sumar"); 
const resta = document.getElementById("Resta"); 
const division = document.getElementById("Dividir"); 
const multi = document.getElementById("Multiplicar"); 

zero.addEventListener("click", ()=>{
    screen.value=0;
})
one.addEventListener("click", ()=>{
    screen.value=1;
})
two.addEventListener("click", ()=>{
    screen.value=2;
})
three.addEventListener("click", ()=>{
    screen.value=3;
})
four.addEventListener("click", ()=>{
    screen.value=4;
})
five.addEventListener("click", ()=>{
    screen.value=5;
})
six.addEventListener("click", ()=>{
    screen.value=6;
})
seven.addEventListener("click", ()=>{
    screen.value=7;
})
eight.addEventListener("click", ()=>{
    screen.value=8;
})
nine.addEventListener("click", ()=>{
    screen.value=9;
})
suma.addEventListener("click", ()=>{
    screen.value=screen.value + "+";
})
resta.addEventListener("click", ()=>{
    screen.value=screen.value + "-";
})
division.addEventListener("click", ()=>{
    screen.value=screen.value + "÷";
})
multi.addEventListener("click", ()=>{
    screen.value=screen.value + "x";
})

