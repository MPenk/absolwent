import types from "./types"
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = localStorage.getItem("alerts") ? JSON.parse(localStorage.getItem("alerts")) : []

const alertsReducer = (state = INITIAL_STATE, action = null) => {
    switch (action.type) {
        case types.ADD_ALERT:
            let alert = {
                ...action.item,
                uuid: uuidv4()
            }
            return [...state, alert];


        case types.REMOVE_ALERT:
            return state.filter(item => item.uuid !== action.item.uuid);
        default:
            return state
    }
}
export default alertsReducer;