_4Digit = grove.create_display(DigitalPin.C16, DigitalPin.C17)
flush = tamaliope_creation.tamaliope("Floush",
    images.create_image("""
. # # # .
# . . . #
# . . . #
. # # # .
# . . . #
"""))
basic.show_string("Tamaliope")
basic.show_string("Food need: ")

def on_forever():
    if flush.food_need > 80:
        basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    elif flush.food_need > 60:
        basic.show_leds("""
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    elif flush.food_need > 40:
        basic.show_leds("""
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        """)
    elif flush.food_need > 20:
        basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        """)
    elif flush.food_need > 0:
        basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        """)
    elif flush.food_need <= 0:
        basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
basic.forever(on_forever)
