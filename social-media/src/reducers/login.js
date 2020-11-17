const initialState = {
    isLogined: false
}

export default function loginCheck(state = initialState, action){
    if(action.type === 'UNLOGINED'){
        return state
    } else if(action.type === 'LOGINED'){
        console.log(state)
        return {
            ...state,
            isLogined: !state.isLogined
        }
    } else if(action.type === 'UNREGISTRED'){
        return state
    }
    return state
}