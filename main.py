_4digit = grove.create_display(DigitalPin.C16, DigitalPin.C17)
_4digit.set(7)
serial.write_line("" + ("Welcome to Tamaliope - 0.01\nWrite help or info."))
basic.show_string("Tamaliope")
flush = tamaliope_creation.tamaliope("Floush",
    images.create_image("""
. # # # .
# . . . #
# . . . #
. # # # .
# . . . #
"""))