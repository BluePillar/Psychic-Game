
var userGuess = []
var guessCount = 0
var winCount = 1
var lossCount = 1
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z']

function newCompGuess() {
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

var compGuess = newCompGuess()

function compare (a, b) {
    if (a === b) {
        compGuess = newCompGuess()
        $("#wins").html("Wins: " + (winCount++))
        alert("You win!")
        guessCount = 0
        $("#remaining").html("Guesses left: 9")
        $("#guesses").html("Your guesses so far: ")
    }
    console.log(compGuess)
}

$(document).keyup(function(){
    userGuess[guessCount] = event.key
    $("#guesses").append(" " + userGuess[guessCount])
    compare (compGuess, userGuess[guessCount])
    guessCount++
    $("#remaining").html("Guesses left: " + (9 - guessCount))
    if (guessCount > 9) {
        alert("You lose!")
        $("#losses").html("Losses: " + (lossCount++))
        compGuess = newCompGuess()
        guessCount = 0
        $("#guesses").html("Your guesses so far: ")
        $("#remaining").html("Guesses left: 9")
    }
})