input.onSound(DetectedSound.Loud, function () {
    music.playMelody("E B C5 A B G A F ", 120)
    music.setVolume(140)
})
radio.setGroup(131)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Sad)
        basic.showNumber(input.temperature())
        basic.clearScreen()
    } else {
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Yes)
            basic.showNumber(input.lightLevel())
            basic.clearScreen()
        }
        if (input.isGesture(Gesture.Shake)) {
            radio.sendString("MOVIMIENTO")
        }
    }
})
