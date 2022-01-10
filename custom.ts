
/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Benutzerdefinierte Blöcke
 */
//% weight=100 color=#0fbc11 icon=""
namespace tamaliope_creation {
    export class tamaliope {
        name: string
        skin: Image
        lvl: number = 5
        last_used_millis = 0
        last_food_need_millis = 0
        food_need = 80
        last_drink_need_millis = 0
        drink_need = 40
        last_medicine_need_millis = 0
        medicine_need = 60
        last_play_need_millis = 0
        play_need = 60
        last_hygiene_need_millis = 0
        hygiene_need = 24

        constructor(name: string, skin: Image) {
            this.name = name
            this.skin = skin

            basic.forever(function () {
                if (this.food_need > 80) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
} 
else if (this.food_need > 60) {
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
} else if (this.food_need > 40) {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
} else if (this.food_need > 20) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
} else if (this.food_need > 0) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
} else if (this.food_need <= 0) {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
                if (control.millis() - this.last_food_need_millis > 3000) {
                    this.last_food_need_millis = control.millis()
                    this.food_need -= 1
                }
                if (control.millis() - this.last_used_millis > 5000) {
                    this.last_used_millis = control.millis()
                    if (this.food_need < 50) {
                        this.lvl -= (50 - this.food_need) / 50
                    }
                    else if(this.food_need > 50) {
                        this.lvl += (this.food_need - 50) / 50
                    }
                    _4digit.show(this.lvl)
                }
            })
        }
    }
}