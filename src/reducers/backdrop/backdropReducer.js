import types from "./types"

const INITIAL_STATE = { open: localStorage.getItem("backdrop") ? JSON.parse(localStorage.getItem("backdrop")) : false}

const backdropReducer = (state = INITIAL_STATE, action = null) => {
    switch (action.type) {
        case types.TOOGLE_BACKDROP:
            let backdrop = state.open;
            if (!backdrop) {
                return {
                    ...state,
                    open: true
                }
            }
            return {
                ...state,
                open: false
            }
        case types.TURN_ON:
            return {
                ...state,
                open: true
            }
        case types.TURN_OFF:
            return {
                ...state,
                open: false
            }
        default:
            return state
    }
}

export default backdropReducer;