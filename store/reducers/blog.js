import { All_BLOGS } from '../type'

const initialState = [];
const Blog = (state = initialState, action) => {
    
    switch (action.type) {
        case All_BLOGS: {
            state = action.payload
            return state
        }
        default: return state;
    }
}

export default Blog;