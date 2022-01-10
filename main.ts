input.onGesture(Gesture.Shake, function () {
    basic.showString("Hoer auf zu schuetteln")
})
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
