game.splash("Welcome to Maggie's Pizza Place")
let diameter = game.askForNumber("Enter the diameter (inches)")
let HST = 0.13
let LABOUR_COST = 0.75
let MATERIALS = 0.5
let RENTAL_COST = 1
let subtotal = LABOUR_COST + (RENTAL_COST + MATERIALS * diameter)
game.splash("Your subtotal is $" + subtotal)
let tax = subtotal * HST
let total = tax + subtotal
game.splash("The total cost of your pizza is $" + Math.round(total * 100) / 100)
