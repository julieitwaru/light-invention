while True:

    #if light level is greater than 15, then set neopixels of
    print("light level:" + input.light_level())
    if input.light_level() > 15:
        light.clear()

    #if light level is equal to or greater than 6, then set neopixels blue
    elif input.light_level() >= 6:
        light.set_all(color.rgb(0,0,255))
