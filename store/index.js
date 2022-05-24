import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'; 
import AppReducer from './reducers'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const Store = createStore(AppReducer, applyMiddleware(thunk));
export default Store;

