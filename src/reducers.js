import { combineReducers } from 'redux';
import darkModeReducer from './reducers/darkMode';

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
})

export default rootReducer;