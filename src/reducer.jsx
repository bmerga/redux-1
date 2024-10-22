import { INCREAMENT } from "./Action";
import { DECREAMENT } from "./Action";
const initialState = {
    count:0,
    maxLimit:100
};
{
    type:"INCREAMENT"
}
const rootReducer = (state=initialState, action) => {
    switch(action.type){
       case "INCREAMENT": {
       return {
          ...state, 
          count: state.count + 1,
         }
    }
    case "DECREAMENT":{
    return {
       ...state, 
       count: state.count - 1,
      }
}
default:
return state;
}
}

export default rootReducer;