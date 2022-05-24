import { combineReducers } from 'redux'
import Counter from './counter'
import Cart from './cart'
import Blog from './blog'
const AppReducer = combineReducers({
    Counter,
    Cart,
    Blog
})

const Reducers = (state, action) => {
    if (action.type === 'USER_LOGOUT') return AppReducer(undefined, action);
    return AppReducer(state, action);
};
export default Reducers