"use strict"

// L'UTENTE SCEGLIA PARI O DISPARI
let pariODispariUser = prompt("Scegli pari o dispari e inseriscilo")
document.getElementById("risultato-user").innerHTML = pariODispariUser

if(pariODispariUser === 'pari'){ //user sceglie pari
    let pariODispariComputer = 'dispari';
    document.getElementById("risultato-pc").innerHTML = pariODispariComputer
}

else{ //user sceglie dispari
    let pariODispariComputer = 'pari';
    document.getElementById("risultato-pc").innerHTML = pariODispariComputer
}

// L'UTENTE INSERISCE UN NUMERO DA 1 A 5
let numberUser = parseInt(prompt("Inserisci un numero da 1 a 5"))
document.getElementById("risultato-numero").innerHTML = `Il numero scelto è ${numberUser}`

if((numberUser < 1) || (numberUser > 5)){
    alert("Il numero inserito non è valido")
}else{
    console.log("Il numero inserito è valido")
}

// IL COMPUTER SCEGLIE UN NUMERO RANDOM DA 1 A 5
function randomNumber(min, max){
    let random = Math.floor(Math.random()*(max - min + 1) + min)
    return random;
}

let randomPc = randomNumber(1, 5)
document.getElementById("risultato-numero-pc").innerHTML = `Il numero scelto è ${randomPc}`

// SOMMA DEI NUMERI SCELTI DALL'UTENTE E DAL COMPUTER
let somma = numberUser + randomPc;
document.getElementById("somma").innerHTML = `La somma tra i valori scelti tra User e Computer è: ${somma}`


// CONTROLLO DEL RISULTATO DELLA SOMMA SE E' PARI O DISPARI
function pariODispari(num){
    if(somma % 2 == 0){
        console.log("Il numero è pari")
        return 'pari;'
    }
    else{
        console.log("Il numero è dispari")
        return 'dispari'
    }
}

let risultato = pariODispari(somma)
document.getElementById("risultato").innerHTML = `Il risultato è ${risultato}`


// CONTROLLO DEL VINCITORE DELLA SFIDA IN BASE AL NUMERO E ALLA SCELTA DI PARI O DISPARI
    if(risultato === pariODispariUser){
        // l'user ha vinto
        document.getElementById("winner").innerHTML = "Il vincitore è User"
    }else{
        // il computer ha vinto
        document.getElementById("winner").innerHTML = "il vincitore è il Computer"

    }

