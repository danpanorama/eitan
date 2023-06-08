import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import ErrorReducer from './reducers/errReducer'

import cartReducer from './reducers/cartReducer'



const reducer = combineReducers({
    err:ErrorReducer,
    cart:cartReducer
 
   
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store