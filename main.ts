class tamaliope {
    name: string
    lvl: number = 5
    last_used_millis = 0
    last_food_need_millis = 0
    food_need = 10
    last_drink_need_millis = 0
    drink_need = 20
    last_medicine_need_millis = 0
    medicine_need = 10
    last_play_need_millis = 0
    play_need = 10
    last_hygiene_need_millis = 0
    hygiene_need = 100

    constructor(name: string) {
        this.name = name
    }
}
input.onButtonPressed(Button.A, function () {
    if (current_mode == modes.FOOD) {
        current_mode = modes.DRINK
        basic.showString("Drink:")
    } else if (current_mode == modes.DRINK) {
        current_mode = modes.HYGIENE
        basic.showString("Hygiene:")
    } else if (current_mode == modes.HYGIENE) {
        current_mode = modes.MEDICINE
        basic.showString("Medicine:")
    } else if (current_mode == modes.MEDICINE) {
        current_mode = modes.PLAY
        basic.showString("Play:")
    } else if (current_mode == modes.PLAY) {
        current_mode = modes.FOOD
        basic.showString("Food:")
    }
})
input.onGesture(Gesture.Shake, function () {
    //basic.showString("Hoer auf zu schuetteln")
})
function display_need(need: number) {
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
function lvl_check() {
    let needs = [flush.food_need, flush.drink_need, flush.hygiene_need, flush.medicine_need, flush.play_need]
    let lvl_change: number = 0
    for (let i = 0; i < needs.length; i++) {
        let need = needs[i]
        if (need < 50) {
            lvl_change -= (50 - need) / 50
        }
        else if (need > 50) {
            lvl_change += (need - 50) / 50
        }
    }
    if (lvl_change < 0) {
        basic.setLedColor(0xff0000)
    }
    else if (lvl_change > 1) {
        basic.setLedColor(0x00ff00)

    }
    else if (lvl_change >= 0) {
        basic.setLedColor(0xffff00)
    }
    flush.lvl += lvl_change
    _4digit.show(flush.lvl)
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
oled96.initDisplay()
oled96.writeString("TEEEEEEST")
serial.writeLine("" + (`Welcome to Tamaliope - 0.01
Write help or info.`))
let flush = new tamaliope("Floush")
let last_drink_pin_used_millis = 0
lvl_check()
basic.showString("Food:")
basic.forever(function () {
    let multipile = 6000
    if (control.millis() - flush.last_food_need_millis > 2 * multipile) {
        flush.last_food_need_millis = control.millis()
        flush.food_need -= 1
    }
    if (control.millis() - flush.last_drink_need_millis > 1 * multipile) {
        flush.last_drink_need_millis = control.millis()
        flush.drink_need -= 1
    }
    if (control.millis() - flush.last_hygiene_need_millis > 3 * multipile) {
        flush.last_hygiene_need_millis = control.millis()
        flush.hygiene_need -= 1
    }
    if (control.millis() - flush.last_medicine_need_millis > 5 * multipile) {
        flush.last_medicine_need_millis = control.millis()
        flush.medicine_need -= 1
    }
    if (control.millis() - flush.last_play_need_millis > 0.5 * multipile) {
        flush.last_play_need_millis = control.millis()
        flush.play_need -= 1
    }
    if (control.millis() - flush.last_used_millis > 5 * 60000) {
        flush.last_used_millis = control.millis()
        lvl_check()
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        if (control.millis() - last_drink_pin_used_millis > 1000) {
            last_drink_pin_used_millis = control.millis()
            flush.drink_need += 2
        }
    }
    switch (current_mode) {
        case modes.FOOD:
            display_need(flush.food_need)
            break
        case modes.DRINK:
            display_need(flush.drink_need)
            break
        case modes.HYGIENE:
            display_need(flush.hygiene_need)
            break
        case modes.MEDICINE:
            display_need(flush.medicine_need)
            break
        case modes.PLAY:
            display_need(flush.play_need)
            break
    }
})
