import types from "./types";

const add = item => ({
    type: types.ADD_ALERT, item
})

const remove = item => ({
    type: types.REMOVE_ALERT, item
})

export default{
    add,
    remove
}