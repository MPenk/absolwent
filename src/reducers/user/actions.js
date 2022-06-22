import types from "./types";

const set = item => ({
    type: types.SET_USER, id: item.id, login: item.login, token: item.token
})

const clear = item => ({
    type: types.CLEAR_USER, item
})

export default{
    set,
    clear
}