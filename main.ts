let distancia = 0
basic.forever(function () {
    distancia = hackbit.us_sonar(
    DigitalPin.P8,
    DigitalPin.P9,
    hackbit.PingUnit.cm
    )
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(distancia)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(distancia)
})
