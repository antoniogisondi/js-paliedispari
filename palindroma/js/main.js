"use strict"
let innerWord = prompt("Inserisci una parola")

function reverseWord(parola){
    let text = innerWord.split("").join("")
    let reverse_text = innerWord.split("").reverse().join("")

    if(parola === reverse_text){
        return true;
    }
    else{
        return false;
    }
}

let control = reverseWord(innerWord)

if(control == true){
    document.getElementById("word").innerHTML = "La parola è palindroma"
}
else{
    document.getElementById("word").innerHTML = "La parola non è palindroma"
}


