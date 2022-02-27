import { DECREMENT, INCREMENT  } from "../actions/countActions";

const initialState= {
    count: 0
}

export  const  countReducer= (state=initialState,action) =>{
    // eslint-disable-next-line default-case
    switch (action.type){
        case DECREMENT:
            return {count: state.count - 1}
        case INCREMENT:
            return {count: state.count + 1}
        default:
        return state
    }
}