import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import HomeRecuder from "./Reducers/HomeRecuder";


const reducers = combineReducers({
    home : HomeRecuder
});

const store = createStore(reducers,applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()))
export default store;