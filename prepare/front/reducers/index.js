import { HYDRATE } from "next-redux-wrapper";
import user from "./user"
import post from "./post"
import {combineReducers} from "redux";

// (이전상태, 액션) => 다음상태를 만들어내는 함수를 reducer 라고 한다.
const rootReducer = combineReducers({
    index: (state = {}, action)=> {
        switch (action.type){
            case HYDRATE:
                console.log('HYDRATE', action);
                return { ...state, ...action.payload};
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;