let roll = document.querySelector(".roll")
let playAgain = document.querySelector(".play-again")
let player1Score = document.querySelector(".player1-score")
let player2Score = document.querySelector(".player2-score")
let player1Hold = document.querySelector(".player1-hold")
let player2Hold = document.querySelector(".player2-hold")
let newGame = document.querySelector(".new-game")
let name1 = document.getElementById("name1")
let name2 = document.getElementById("name2")
let hold = document.querySelector(".hold")
let player1CurrScore = []
let player2CurrScore = []
let accumulator = []
let player1Accumulator = []
let player2Accumulator = []
let player1 = true
let p1Score = []
let p2Score = []
let total1
let total2

// dice graphic
let showDice = document.querySelector(".show-dice")
let topLeft = document.querySelector(".topLeft")
let topCenter = document.querySelector(".topCenter")
let topRight = document.querySelector(".topRight")
let middleLeft = document.querySelector(".middleLeft")
let middleCenter = document.querySelector(".middleCenter")
let middleRight = document.querySelector(".middleRight")
let bottomLeft = document.querySelector(".bottomLeft")
let bottomCenter = document.querySelector(".bottomCenter")
let bottomRight = document.querySelector(".bottomRight")

// reset game
newGame.addEventListener("click", () => {
    player1CurrScore = []
    player1Sum = 0
    player1Accumulator = []
    player2CurrScore = []
    player2Sum = 0
    player2Accumulator = []
    player2Hold.innerHTML = 0
    player1Hold.innerHTML = 0
    roll.style.display = "block"
    hold.style.display = "block"
    total1 = 0
    total2 = 0
    p1Score = []
    p2Score = []
    player1 = true
    player1Score.innerHTML = 0
    player2Score.innerHTML = 0
    name1.innerHTML = "Player 1"
    name2.innerHTML = "Player 2"
})

// player holds and other player now can take their turns
hold.addEventListener("click", () => {
    if (player1 == true) {
        p1Score.push(player1CurrScore)
        total1 = p1Score.reduce((a, b) => {
            return a + b
        })
        if (total1 >= 21) {
            name1.innerHTML = "Winner"
            roll.style.display = "none"
            hold.style.display = "none"
        }
        
        player1Score.innerHTML = total1
        player1Accumulator = []
        player1 = false
    } else if (player1 == false){
        p2Score.push(player2CurrScore)
        total2 = p2Score.reduce((a, b) => {
            return a + b
        })
        if (total2 >= 21) {
            name2.innerHTML = "Winner"
            roll.style.display = "none"
            hold.style.display = "none"
            player1 = true
        }
        player2Score.innerHTML = total2
        player2Accumulator = []
        player1 = true
    }
})

// roll the dice
roll.addEventListener("click", () => {
    //show the dice on the screen
    showDice.style.opacity = "1"

    // create random number beween 1 and 6
    let diceRoll = Math.floor(Math.random() * (7 - 1) + 1)
    
    // check the random number and show the correlating dice face 
    if (diceRoll == 1) {
        topLeft.style.display = "none"
        topCenter.style.display = "none"
        topRight.style.display = "none"
        middleLeft.style.display = "none"
        middleCenter.style.display = "block"
        middleRight.style.display = "none"
        bottomLeft.style.display = "none"
        bottomCenter.style.display = "none"
        bottomRight.style.display = "none"
    } else if (diceRoll == 2) {
        topLeft.style.display = "none"
        topCenter.style.display = "none"
        topRight.style.display = "block"
        middleLeft.style.display = "none"
        middleCenter.style.display = "none"
        middleRight.style.display = "none"
        bottomLeft.style.display = "block"
        bottomCenter.style.display = "none"
        bottomRight.style.display = "none"
    } else if (diceRoll == 3) {
        topLeft.style.display = "none"
        topCenter.style.display = "none"
        topRight.style.display = "block"
        middleLeft.style.display = "none"
        middleCenter.style.display = "block"
        middleRight.style.display = "none"
        bottomLeft.style.display = "block"
        bottomCenter.style.display = "none"
        bottomRight.style.display = "none"
    } else if (diceRoll == 4) {
        topLeft.style.display = "block"
        topCenter.style.display = "none"
        topRight.style.display = "block"
        middleLeft.style.display = "none"
        middleCenter.style.display = "none"
        middleRight.style.display = "none"
        bottomLeft.style.display = "block"
        bottomCenter.style.display = "none"
        bottomRight.style.display = "block"
    } else if (diceRoll == 5) {
        topLeft.style.display = "block"
        topCenter.style.display = "none"
        topRight.style.display = "block"
        middleLeft.style.display = "none"
        middleCenter.style.display = "block"
        middleRight.style.display = "none"
        bottomLeft.style.display = "block"
        bottomCenter.style.display = "none"
        bottomRight.style.display = "block"
    } else if (diceRoll == 6) {
        topLeft.style.display = "block"
        topCenter.style.display = "none"
        topRight.style.display = "block"
        middleLeft.style.display = "block"
        middleCenter.style.display = "none"
        middleRight.style.display = "block"
        bottomLeft.style.display = "block"
        bottomCenter.style.display = "none"
        bottomRight.style.display = "block"
    }
    
    // runs if it is player 1's turn 
    if (player1 == true) {
        // push the dice roll value to the player1Accumulator array
        player1Accumulator.push(diceRoll)
        // initialize a variable to add the values of each dice roll in the array
        let player1Sum = 0
        // loop over the player1Accumulator array that holds all the dice rolls
        for (let i = 0; i < player1Accumulator.length; i++) {
            player1Sum += player1Accumulator[i]
            // create a variable player1CurrScore and set that equal to the sum of all the dice rolls 
            player1CurrScore = player1Sum
            if (player1CurrScore >= 21) {
                name1.innerHTML = "Winner"
                roll.style.display = "none"
                hold.style.display = "none"
            }
            // create a if check that will reset the game if the dice rolls a 1
            if (player1Accumulator[i] == 1) {
                player1 = false
                player1CurrScore = []
                player1Sum = 0
                player1Accumulator = []
            } 
        }
    } else if (player1 == false) {
        player2Accumulator.push(diceRoll)
        let player2Sum = 0
        for (let i = 0; i < player2Accumulator.length; i++) {
            player2Sum += player2Accumulator[i]
            // create a variable currScore and set that equal to the sum of all the dice rolls 
            player2CurrScore = player2Sum
            if (player2CurrScore >= 21) {
                name2.innerHTML = "Winner"
                roll.style.display = "none"
                hold.style.display = "none"
            }
            // create a if check that will reset the game if the dice rolls a 1
            if (player2Accumulator[i] == 1) {
                player1 = true
                player2CurrScore = []
                player2Sum = 0
                player2Accumulator = []
            }
            
        }
    }

    if (player1) {
        player1Hold.innerHTML = player1CurrScore
        player2Hold.innerHTML = 0
    } else if (!player1) {
        player2Hold.innerHTML = player2CurrScore
        player1Hold.innerHTML = 0
    }  
})