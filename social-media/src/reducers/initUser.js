const initialState = {
    isLogined: false
}

export default function loginCheck(state = initialState, action){
    //console.log(action)
    if(action.type === 'UNLOGINED'){
        return {
            ...state,
            isLogined: action.payload.isLogined
        }
    } else if(action.type === 'LOGINED'){
        console.log(state)
        return {
            ...state,
            isLogined: action.payload.isLogined
        }
    }
    return state
}