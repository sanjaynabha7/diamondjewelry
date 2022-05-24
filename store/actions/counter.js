import { INCREMENT, DECREMENT } from '../type'

export const Increment = (count) => async (dispatch) => {
    dispatch({
        type: INCREMENT,
        payload: count,
      });

  }
  export const Decrement = (count) => async (dispatch) => {
    dispatch({
        type: DECREMENT,
        payload: count,
      });

  }
