
import {createStore, combineReducers} from 'redux'
import productsReducer from './reducers/productsReducer'


import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const rootReducer = combineReducers({
    productsState: productsReducer
})


const store = createStore(rootReducer, composeWithDevTools())

export default store;