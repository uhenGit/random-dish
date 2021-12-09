import { createStore, applyMiddleware } from "redux"
import  thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const mv = [thunk]
const store = createStore(rootReducer, initialState, applyMiddleware(...mv))
export default store