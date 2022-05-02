import { combineReducers } from 'redux';
import darkModeReducer from './reducers/darkMode';
import userReducer from './reducers/user/reducers';
import alertsReducer from './reducers/alerts';
import backdropReducer from './reducers/backdrop';

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
    user: userReducer,
    alerts: alertsReducer,
    backdrop: backdropReducer
})

export default rootReducer;