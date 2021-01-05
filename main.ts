while (true) {
    // if light level is greater than 15, then set neopixels of
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() > 15) {
        light.clear()
    } else if (input.lightLevel() >= 6) {
        // if light level is equal to or greater than 6, then set neopixels blue
        light.setAll(color.rgb(0, 0, 255))
    }
    
}
