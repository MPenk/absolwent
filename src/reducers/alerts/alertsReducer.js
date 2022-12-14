import types from "./types"
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = []

const alertsReducer = (state = INITIAL_STATE, action = null) => {
    switch (action.type) {
        case types.ADD_ALERT:
            let alert = {
                ...action.item,
                uuid: uuidv4()
            }
            let arr = [...state, alert]
            return arr.slice(-3);


        case types.REMOVE_ALERT:
            return state.filter(item => item.uuid !== action.item.uuid);
        default:
            return state
    }
}
export default alertsReducer;