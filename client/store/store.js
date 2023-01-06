import { applyMiddleware, combineReducers, createStore } from "redux"
import { userVerification } from './reducers/signin'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    user: userVerification
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;