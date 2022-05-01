import types from "./types";

const toogle = item => ({
    type: types.TOOGLE_BACKDROP, item
})
const turnOn = item => ({
    type: types.TURN_ON, item
})
const turnOff = item => ({
    type: types.TURN_OFF, item
})
export default{
    toogle,
    turnOn,
    turnOff
}