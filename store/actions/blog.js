import { All_BLOGS } from '../type'

export const All_blogs = () => async (dispatch) => {   
    
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await res.json()
    dispatch({
        type: All_BLOGS,
        payload: data,
      });

  }

