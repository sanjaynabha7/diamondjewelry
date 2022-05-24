import { ADD_TO_CART, REMOVE_TO_CART } from '../type'

const initialState = 0;

const Cart = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const { payload, quantity = 1 } = action
            let isProductInCart = false
            const productList = [...state]
            if (state.length < 1) {
                payload.cartQty = quantity
                productList.push(action.payload)
            } else {
                for (let i = 0; i < productList.length; i++) {
                    const product = productList[i]
                    if (product._id === payload._id) {
                        product.cartQty = product.cartQty + 1
                        isProductInCart = true
                        break
                    }
                }
                if (!isProductInCart) {
                    payload.cartQty = quantity
                    productList.push(payload)
                }
            }
            return productList
        }
        case REMOVE_TO_CART: {
            const { payload } = action
            return state.filter((product) => product._id !== payload);
        }
        default: return state;
    }
}

export default Cart;