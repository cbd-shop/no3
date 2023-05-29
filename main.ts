input.onPinPressed(TouchPin.P0, function () {
    basic.showString("" + (input.rotation(Rotation.Pitch)))
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel()))
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("" + (input.compassHeading()))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello!")
    basic.clearScreen()
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.magneticForce(Dimension.X)))
})
