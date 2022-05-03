import types from "./types"

const INITIAL_STATE = { isDark: localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode")) : false }

const darkModeReducer = (state = INITIAL_STATE, action = null) => {
    switch (action.type) {
        case types.TOOGLE_MODE:
            let isDark = state.isDark;
            if (!isDark) {
                return {
                    ...state,
                    isDark: true
                }
            }
            return {
                ...state,
                isDark: false
            }
        default:
            return state
    }
}

export default darkModeReducer;