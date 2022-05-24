import { INCREMENT, DECREMENT } from '../type'

const initialState = 222;

const Counter = (state = initialState, action) => {
    switch (action.type) {
           case INCREMENT: {
            state = action.payload
            return state
        }
        case DECREMENT: {
            state = action.payload
            return state
        }
        default: return state;
    }
}

export default Counter;