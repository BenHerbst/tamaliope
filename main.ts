input.onButtonPressed(Button.A, function () {
    if (current_mode == modes.FOOD) {
        current_mode = modes.DRINK
basic.showString("Drink:")
    } else if (current_mode == modes.DRINK) {
        current_mode = modes.FOOD
basic.showString("Food:")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Hoer auf zu schuetteln")
})
function display_need (need: number) {
    if (need > 80) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (need > 60) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (need > 40) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (need > 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (need > 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (need <= 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
}
enum modes {
    FOOD,
    DRINK,
    HYGIENE,
    MEDICINE,
    PLAY
}
let current_mode = modes.FOOD
let _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
_4digit.set(7)
serial.writeLine("" + (`Welcome to Tamaliope - 0.01
Write help or info.`))
let flush = new tamaliope_creation.tamaliope("Floush", images.createImage(`
. # # # .
# . . . #
# . . . #
. # # # .
# . . . #
`))
basic.forever(function () {
    switch (current_mode) {
        case modes.FOOD:
            display_need(flush.food_need)
            break
        case modes.DRINK:
            display_need(flush.drink_need)
            break
    }
})
