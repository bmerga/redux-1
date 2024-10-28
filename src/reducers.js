import { INCREAMENT, DECREAMENT } from "./Action";


const initialState = {
    count:0,
    maxLimit:100
};

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
       case INCREAMENT: {
       return {
          ...state, 
          count: state.count + 1,
         };
    }
    case DECREAMENT:{
    return {
       ...state, 
       count: state.count - 1,
      };
}
default:
return state;
}
};

export default rootReducer;