import types from "./types"

const INITIAL_STATE = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {
    isLogged: false,
    id: null,
    login: null,
    token: null
}


const userReducer = (state = INITIAL_STATE, action = null) => {
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                isLogged: true,
                id: action.id,
                login: action.login,
                token: action.token
            }
        case types.CLEAR_USER:
            return {
                isLogged: false,
                id: null,
                login: null,
                token: null
            }
        default:
            return state
    }
}

export default userReducer;