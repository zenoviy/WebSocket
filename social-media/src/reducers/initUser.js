import { formActions } from '../constants/actionsName';

const initialState = {
    isLogined: false,
    loginMessage: ''
}

export default function loginCheck(state = initialState, action){
    if(action.type === formActions['UNLOGIN']){
        return {
            ...state,
            isLogined: action.payload.isLogined
        }
    } else if(action.type === formActions['LOGIN']){
        return {
            ...state,
            isLogined: action.payload.isLogined
        }
    } else if(action.type === formActions['REGISTRATION']){
        return {
            ...state,
            isLogined: action.payload.isLogined
        }
    }
    return state
}