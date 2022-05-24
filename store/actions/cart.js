import { ADD_TO_CART, REMOVE_TO_CART } from '../type'

export const addToCart = (product) => async (dispatch) => {
    
    dispatch({
        type: ADD_TO_CART,
        payload: product,
    });

}

export const removeToCart = (itemId) => async (dispatch) => {
    
    dispatch({
        type: REMOVE_TO_CART,
        payload: itemId,
    });

}
