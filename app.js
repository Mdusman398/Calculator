let result = document.getElementById("result");
let userValue = "";



function ac (){
    result.value =  userValue;
}
function del (){
    result.value = result.value.slice(0, userValue.length-1);
}
function divide (){
    result.value += document.getElementById('divide').innerText;
}
function multiply (){
    result.value += document.getElementById('multiply').innerText;
}
function seven (){
    result.value += document.getElementById('seven').innerText;
}
function eight (){
    result.value += document.getElementById('eight').innerText;
}
function nine (){
    result.value += document.getElementById('nine').innerText;
}
function subtract (){
    result.value += document.getElementById('subtract').innerText;
}
function six (){
    result.value += document.getElementById('six').innerText;
}
function five (){
    result.value += document.getElementById('five').innerText;
}
function four (){
    result.value += document.getElementById('four').innerText;
}
function addition (){
    result.value += document.getElementById('addition').innerText;
}
function one (){
    result.value += document.getElementById('one').innerText;
}
function two (){
    result.value += document.getElementById('two').innerText;
}
function three (){
    result.value += document.getElementById('three').innerText;
}
function calculation (){
    result.value = eval(result.value)

}
function zero (){
    result.value += document.getElementById('zero').innerText;
}
function dot (){
    result.value += document.getElementById('dot').innerText;
}

