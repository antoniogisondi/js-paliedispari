"use strict"
let innerWord = prompt("Inserisci una parola")

function reverseWord(word){
    let reverse = '';
    for(let i = word.length - 1; i >= 0; i--){
        reverse += word[i]
    }

    return reverse;
}

let reverse_word = reverseWord(innerWord)

if(reverse_word === innerWord){
    document.getElementById("word").innerHTML = innerWord
}
else{
    alert("La parola è sbagliata. Inseriscine un'altra")
}
