input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(0, 99))
})
input.onButtonPressed(Button.B, function () {
    letter = randint(1, 3)
    if (letter == 1) {
        basic.showString("M")
    } else if (letter == 2) {
        basic.showString("W")
    } else {
        basic.showString("g")
    }
})
let letter = 0
basic.showString("Press A or B")
