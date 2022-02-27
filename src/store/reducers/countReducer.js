import { DECREMENT, INCREMENT  } from "../actions/countActions";

const initialState= {
    count: 0
}

export  const  countReducer= (state=initialState,action) =>{
    // eslint-disable-next-line default-case
    switch (action.type){
        case DECREMENT:
            return {...state,count: state.count - action.payload}
        case INCREMENT:
            return {...state,count: state.count + action.payload}
        default:
        return state
    }
}