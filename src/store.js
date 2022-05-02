import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducers";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const middlewares = [thunk];
const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(...middlewares)))
store.subscribe(()=>{
    localStorage.setItem('darkMode', store.getState().darkMode.isDark)
    localStorage.setItem('user', JSON.stringify(store.getState().user))
    localStorage.setItem('alerts', JSON.stringify(store.getState().alerts))
    localStorage.setItem('backdrop', store.getState().backdrop.open)
})
export default store;