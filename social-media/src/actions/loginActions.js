import { checkUserLogin, unregisterUser } from '../api/serverRequests';

export function setLogin(dispatch){
    return dispatch => {
        checkUserLogin()
        .then(resolve => { 
            dispatch({ type: 'LOGINED', payload: resolve })

        })
    }
}


export function unLogin(){
    return dispatch => {
        unregisterUser()
        .then(resolve => { 
            dispatch({ type: 'UNLOGINED', payload: resolve })

        })
    }
}