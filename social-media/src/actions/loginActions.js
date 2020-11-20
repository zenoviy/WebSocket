import { checkUserLogin, unregisterUser } from '../api/serverRequests';

export function setLogin(formObject){
    return dispatch => {
        checkUserLogin()
        .then(resolve => { 
            dispatch({ type: 'LOGINED', payload: resolve })

        })
    }
}


export function unLogin(formObject){
    return dispatch => {
        unregisterUser()
        .then(resolve => { 
            dispatch({ type: 'UNLOGINED', payload: resolve })

        })
    }
}