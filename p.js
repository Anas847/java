
var input = document.getElementById('input')

function showinput(value) {

    input.value += value
}

function calc() {
    var calculate = eval(input.value) 
    input.value = calculate
}
var del = document.getElementById("del")
del.value = ""
