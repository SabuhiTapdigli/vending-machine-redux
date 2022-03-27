import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { rootReducer } from './reducers/rootReducer'

const middeleware = [thunk]
if(process.env.NODE_ENV === 'development'){
    middeleware.push(logger)
}
const store = createStore(rootReducer,applyMiddleware(...middeleware))

export default store